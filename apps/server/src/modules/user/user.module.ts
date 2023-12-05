import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserResolver} from './user.resolver';
import {ConfigModule} from '@nestjs/config';
import {DrizzleModule} from '../../drizzle/drizzle.module';
import {UserRepository} from './user.repository';
import {RequestModule} from '../request/request.module';
import {SmsModule} from "../sms/sms.module";

@Module({
    providers: [UserResolver, UserService, UserRepository],
    imports: [
        ConfigModule.forRoot({
            cache: true,
        }),
        DrizzleModule,
        RequestModule,
        SmsModule
    ],
    exports: [UserService, UserRepository],
})
export class UserModule {
}
