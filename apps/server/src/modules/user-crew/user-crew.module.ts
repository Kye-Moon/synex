import {Module} from '@nestjs/common';
import {UserCrewService} from './user-crew.service';
import {UserCrewResolver} from './user-crew.resolver';
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";
import {UserCrewRepository} from "./user-crew.repository";
import {UserModule} from "../user/user.module";

@Module({
    providers: [UserCrewResolver, UserCrewService, UserCrewRepository],
    imports: [
        DrizzleModule,
        RequestModule,
        UserModule,
    ],
    exports: [UserCrewService, UserCrewRepository],
})
export class UserCrewModule {
}
