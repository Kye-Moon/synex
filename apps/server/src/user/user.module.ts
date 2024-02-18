import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserRepository} from "./user.repository";
import {DrizzleModule} from "../drizzle/drizzle.module";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [
        DrizzleModule,
    ],
    exports: [UserService, UserRepository],
})
export class UserModule {
}
