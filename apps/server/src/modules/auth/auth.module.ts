import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthResolver} from './auth.resolver';
import {JwtService} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {PassportModule} from '@nestjs/passport';
import {UserModule} from '../user/user.module';
import {JwtStrategy} from './jwt.strategy';
import {LocalStrategy} from './local.stratedgy';
import {OrganisationModule} from "../organisation/organisation.module";
import {EmailModule} from "../email/email.module";

@Module({
    providers: [
        AuthService,
        AuthResolver,
        ConfigService,
        JwtService,
        JwtStrategy,
        LocalStrategy,

    ],
    imports: [UserModule, PassportModule, ConfigModule, OrganisationModule, EmailModule],
    exports: [AuthService],
})
export class AuthModule {
}
