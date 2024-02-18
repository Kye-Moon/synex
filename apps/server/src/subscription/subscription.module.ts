import {forwardRef, Module} from '@nestjs/common';
import {SubscriptionService} from './subscription.service';
import {SubscriptionController} from './subscription.controller';
import {SubscriptionRepository} from "./subscription.repository";
import {DrizzleModule} from "../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";
import {PaymentsModule} from "../payments/payments.module";

@Module({
    controllers: [SubscriptionController],
    imports: [
        DrizzleModule,
        RequestModule,
        forwardRef(() => PaymentsModule)
    ],
    providers: [SubscriptionService, SubscriptionRepository],
    exports: [SubscriptionService, SubscriptionRepository]
})
export class SubscriptionModule {
}
