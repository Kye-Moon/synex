import {Injectable} from '@nestjs/common';
import {CreateSubscriptionDto} from './dto/create-subscription.dto';
import {UpdateSubscriptionDto} from './dto/update-subscription.dto';
import {SubscriptionRepository} from "./subscription.repository";
import {PaymentsService} from "../payments/payments.service";

@Injectable()
export class SubscriptionService {

    constructor(
        private readonly subscriptionRepository: SubscriptionRepository,
        private readonly paymentsService: PaymentsService
    ) {

    }

    async create(createSubscriptionDto: CreateSubscriptionDto) {
        return await this.subscriptionRepository.create(createSubscriptionDto);
    }

    async findOneByExternalProductId(externalProductId: string) {
        const sub = await this.subscriptionRepository.findOneByExternalProductId(externalProductId);
        const product = await this.paymentsService.getStripeProduct(sub.externalProductId);
        const stripeSubscription = await this.paymentsService.getStripeSubscription(sub.externalId);
        return {
            product,
            stripeSubscription
        }
    }

    update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
        return `This action updates a #${id} subscription`;
    }
}
