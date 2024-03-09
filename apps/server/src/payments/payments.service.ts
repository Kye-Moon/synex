import {Injectable} from '@nestjs/common';
import Stripe from "stripe";
import {InjectStripeClient} from "@golevelup/nestjs-stripe";
import {clerkClient} from "@clerk/clerk-sdk-node";
import {RequestService} from "../request/request.service";
import {UserService} from "../user/user.service";
import {OrganisationService} from "../organisation/organisation.service";
import {OrganisationRepository} from "../organisation/organisation.repository";

@Injectable()
export class PaymentsService {
    constructor(@InjectStripeClient() private stripe: Stripe,
                private requestService: RequestService,
                private userService: UserService,
                private organisationService: OrganisationService,
                private organisationRepository: OrganisationRepository,
    ) {
    }
    async handleCreateSubscriptionSession(priceId: string) {
        const authUser = await clerkClient.users.getUser(this.requestService.userId);
        const authOrganisation = await clerkClient.organizations.getOrganization({
            organizationId: this.requestService.organisationId
        });

        const localOrg = await this.organisationService.findOrCreateByAuthId({
            authServiceId: authOrganisation.id,
            name: authOrganisation.name
        });

        const localUser = await this.userService.findOrCreateByAuthServiceId({
            authServiceId: authUser.id,
            email: authUser.emailAddresses[0].emailAddress,
            organisationId: localOrg.id
        });

        let customer: Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>;
        if (localOrg.customerId) {
            customer = await this.getCustomer(localOrg.customerId);
        } else {
            customer = await this.createCustomer({
                userEmail: localUser.email,
                orgId: localOrg.id
            })
            await this.organisationRepository.update({
                id: localOrg.id,
                input: {
                    customerId: customer.id
                }
            });
        }

        return await this.createSubscriptionSession(
            customer.id,
            priceId,
        );
    }

    async createCustomer({userEmail, orgId}: {
        userEmail: string,
        orgId: string
    }): Promise<Stripe.Response<Stripe.Customer> | undefined> {
        return await this.stripe.customers.create({
            email: userEmail,
            metadata: {
                organisation: orgId
            }
        });
    }

    async getCustomer(customerId: string) {
        return await this.stripe.customers.retrieve(customerId);
    }


    async getStripeProduct(productId: string) {
        return await this.stripe.products.retrieve(productId);
    }

    async getStripeSubscription(subscriptionId: string) {
        return await this.stripe.subscriptions.retrieve(subscriptionId);
    }

    async createStripePortalSession() {
        const org = await this.organisationRepository.findOneByAuthId(this.requestService.organisationId)
        return await this.stripe.billingPortal.sessions.create({
            customer: org.customerId,
            return_url: process.env.STRIPE_PORTAL_RETURN_URL
        });
    }


    async createSubscriptionSession(
        customerId: string, // The stripe customer id
        priceId: string, // The stripe price id
    ): Promise<Stripe.Response<Stripe.Checkout.Session> | undefined> {
        try {
            return this.stripe.checkout.sessions.create({
                success_url: process.env.STRIPE_CHECKOUT_SUCCESS_URL,
                customer: customerId,
                allow_promotion_codes: true,
                line_items: [
                    {
                        price: priceId,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
            });
        } catch (error) {
            console.error('Error from stripe:', error);
        }
    }
}
