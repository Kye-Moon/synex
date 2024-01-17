import {forwardRef, Module} from '@nestjs/common';
import {JobRecordService} from './job-record.service';
import {JobRecordResolver} from './job-record.resolver';
import {JobRecordRepository} from "./job-record.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";
import {JobModule} from "../job/job.module";
import {JobRecordImageModule} from "../job-record-image/job-record-image.module";
import {VariationInitialDataModule} from "../variation-initial-data/variation-initial-data.module";

@Module({
    providers: [JobRecordResolver, JobRecordService, JobRecordRepository],
    imports: [
        DrizzleModule,
        RequestModule,
        forwardRef(() => JobModule),
        JobRecordImageModule,
        VariationInitialDataModule,
    ],
    exports: [JobRecordService, JobRecordRepository],
})
export class JobRecordModule {
}
