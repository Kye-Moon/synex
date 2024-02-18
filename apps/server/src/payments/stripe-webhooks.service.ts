import {Injectable} from '@nestjs/common';
import Stripe from "stripe";
import {InjectStripeClient, StripeWebhookHandler} from "@golevelup/nestjs-stripe";
import clerkClient from '@clerk/clerk-sdk-node';
import {UserRepository} from "../user/user.repository";
import {user} from "../drizzle/schema";
import {OrganisationRepository} from "../organisation/organisation.repository";
import {SubscriptionRepository} from "../subscription/subscription.repository";

@Injectable()
export class StripeWebhooksService {
    constructor(
        @InjectStripeClient() private stripe: Stripe,
        private userRepository: UserRepository,
        private organisationRepository: OrganisationRepository,
        private subscriptionRepository: SubscriptionRepository
    ) {
    }

    @StripeWebhookHandler('customer.subscription.created')
    async handleSubscriptionCreate(event: Stripe.Event): Promise<void> {
        console.log('subscription created');
        try {
            const dataObject = event.data.object as Stripe.Subscription;
            const customer = await this.stripe.customers.retrieve(dataObject.customer as string) as Stripe.Customer;

            const accountOrg = await this.organisationRepository.findOneById(customer.metadata.organisation as string);
            const userRole = await this.getAccessRoleFromSubscriptionEvent(dataObject);

            const authServiceOrg = await this.getAuthServiceOrganisationFromSubscriptionEvent(dataObject);
            await clerkClient.organizations.updateOrganization(accountOrg.authServiceId, {
                publicMetadata: {
                    ...authServiceOrg.publicMetadata,
                    [userRole]: 'true'
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    @StripeWebhookHandler('customer.subscription.deleted')
    async handleSubscriptionDelete(event: Stripe.Event): Promise<void> {
        console.log('subscription deleted');
        try {
            const dataObject = event.data.object as Stripe.Subscription;
            const userRole = this.getAccessRoleFromSubscriptionEvent(dataObject);

            const authServiceOrg = await this.getAuthServiceOrganisationFromSubscriptionEvent(dataObject);
            await clerkClient.organizations.updateOrganization(authServiceOrg.id, {
                publicMetadata: {
                    ...authServiceOrg.publicMetadata,
                    [userRole]: 'false'
                }
            })
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    @StripeWebhookHandler('customer.subscription.paused')
    async handleSubscriptionPause(event: Stripe.Event): Promise<void> {
        console.log('subscription paused');
        try {
            const dataObject = event.data.object as Stripe.Subscription;
            const userRole = this.getAccessRoleFromSubscriptionEvent(dataObject);

            const authServiceOrg = await this.getAuthServiceOrganisationFromSubscriptionEvent(dataObject);
            await clerkClient.organizations.updateOrganization(authServiceOrg.id, {
                publicMetadata: {
                    ...authServiceOrg.publicMetadata,
                    [userRole]: 'false'
                }
            })
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    @StripeWebhookHandler('customer.subscription.resumed')
    async handleSubscriptionResume(event: Stripe.Event): Promise<void> {
        console.log('subscription resumed');
        try {
            const dataObject = event.data.object as Stripe.Subscription;
            const userRole = this.getAccessRoleFromSubscriptionEvent(dataObject);

            const authServiceOrg = await this.getAuthServiceOrganisationFromSubscriptionEvent(dataObject);
            await clerkClient.organizations.updateOrganization(authServiceOrg.id, {
                publicMetadata: {
                    ...authServiceOrg.publicMetadata,
                    [userRole]: 'true'
                }
            })
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getAuthServiceOrganisationFromSubscriptionEvent(event: Stripe.Subscription) {
        const customer = await this.stripe.customers.retrieve(event.customer as string) as Stripe.Customer;
        const accountOrg = await this.organisationRepository.findOneById(customer.metadata.organisation as string);

        return await clerkClient.organizations.getOrganization({organizationId: accountOrg.authServiceId});
    }

    getAccessRoleFromSubscriptionEvent(event: Stripe.Subscription) {
        const productId = event.items.data[0].price.product as string;
        return this.getAccessRoleFromProduct(productId);
    }

    getAccessRoleFromProduct(productId: string) {
        switch (productId) {
            case process.env.VARIFY_PRODUCT_ID:
                return 'varify_access';
            case process.env.FIELD_LENZ_PRODUCT_ID:
                return 'field_lenz_access';
            default:
                return null;
        }
    }
}
