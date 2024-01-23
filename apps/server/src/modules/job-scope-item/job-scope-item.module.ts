import {Module} from '@nestjs/common';
import {JobScopeItemService} from './job-scope-item.service';
import {JobScopeItemResolver} from './job-scope-item.resolver';
import {JobScopeItemRepository} from "./job-scope-item.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";

@Module({
    providers: [JobScopeItemResolver, JobScopeItemService, JobScopeItemRepository],
    imports: [
        DrizzleModule,
        RequestModule,
    ],
    exports: [JobScopeItemService, JobScopeItemRepository],
})
export class JobScopeItemModule {
}
