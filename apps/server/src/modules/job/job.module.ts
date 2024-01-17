import {forwardRef, Module} from '@nestjs/common';
import {JobService} from './job.service';
import {JobResolver} from './job.resolver';
import {JobRepository} from './job.repository';
import {DrizzleModule} from '../../drizzle/drizzle.module';
import {RequestModule} from '../request/request.module';
import {JobCrewModule} from "../job-crew/job-crew.module";
import {JobRecordModule} from "../job-record/job-record.module";

@Module({
  providers: [JobResolver, JobService, JobRepository],
  imports: [DrizzleModule, RequestModule, forwardRef(() => JobCrewModule), JobRecordModule],
  exports: [JobService, JobRepository],
})
export class JobModule {}
