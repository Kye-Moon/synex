import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserRepository} from "./user.repository";
import {DrizzleModule} from "../drizzle/drizzle.module";
import {OrganisationModule} from "../organisation/organisation.module";
import {RequestModule} from "../request/request.module";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [
        DrizzleModule,
        OrganisationModule,
        RequestModule,
    ],
    exports: [UserService, UserRepository],
})
export class UserModule {
}
