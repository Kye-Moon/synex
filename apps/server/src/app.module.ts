import {Module} from '@nestjs/common';
import {LoggerModule} from 'nestjs-pino';
import {ConfigModule} from "@nestjs/config";
import configs from "./configs";
import {PaymentsModule} from './payments/payments.module';
import {RequestModule} from "./request/request.module";
import {UserModule} from './user/user.module';
import {OrganisationModule} from './organisation/organisation.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configs],
        }),
        LoggerModule.forRoot({
            pinoHttp: {
                enabled: false,
                transport: {
                    target: 'pino-pretty',
                    options: {
                        singleLine: true,
                    },
                },
            },
        }),
        RequestModule,
        PaymentsModule,
        PaymentsModule,
        UserModule,
        OrganisationModule,
        SubscriptionModule,
    ],
})
export class AppModule {
}
