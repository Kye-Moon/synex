import {Module} from '@nestjs/common';
import {PaymentsService} from './payments.service';
import {PaymentsController} from './payments.controller';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {StripeModule} from "@golevelup/nestjs-stripe";
import {RequestModule} from "../request/request.module";
import {UserModule} from "../user/user.module";
import {OrganisationModule} from "../organisation/organisation.module";
import {StripeWebhooksService} from "./stripe-webhooks.service";
import {SubscriptionModule} from "../subscription/subscription.module";


@Module({
    imports: [
        StripeModule.forRootAsync(StripeModule, {
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) =>
                configService.get('STRIPE_CONFIG'),
            inject: [ConfigService],
        }),
        RequestModule,
        UserModule,
        OrganisationModule,
        SubscriptionModule,
    ],
    controllers: [PaymentsController],
    providers: [PaymentsService, StripeWebhooksService],
    exports: [PaymentsService]
})
export class PaymentsModule {
}
