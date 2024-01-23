import {Module} from '@nestjs/common';
import {JobAttachmentService} from './job-attachment.service';
import {JobAttachmentResolver} from './job-attachment.resolver';
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";
import {JobAttachmentRepository} from "./job-attachment.repository";

@Module({
    providers: [JobAttachmentResolver, JobAttachmentService, JobAttachmentRepository],
    imports: [
        DrizzleModule,
        RequestModule,
    ],
    exports: [JobAttachmentService, JobAttachmentRepository],
})
export class JobAttachmentModule {
}
