import { Module } from '@nestjs/common';
import { JobRecordImageService } from './job-record-image.service';
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";

@Module({
  providers: [JobRecordImageService],
  imports: [
    DrizzleModule,
    RequestModule,
  ],
    exports: [JobRecordImageService],
})
export class JobRecordImageModule {}
