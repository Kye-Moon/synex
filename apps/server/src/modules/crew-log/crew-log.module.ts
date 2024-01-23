import { Module } from '@nestjs/common';
import { CrewLogService } from './crew-log.service';
import { CrewLogResolver } from './crew-log.resolver';
import {CrewLogRepository} from "./crew-log.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {CrewLogImageRepository} from "../crew-log-image/crew-log-image.repository";
import {CrewLogImageModule} from "../crew-log-image/crew-log-image.module";
import {RequestModule} from "../request/request.module";

@Module({
  providers: [CrewLogResolver, CrewLogService,CrewLogRepository],
  imports: [DrizzleModule, CrewLogImageModule,RequestModule],
  exports: [CrewLogService,CrewLogRepository]
})
export class CrewLogModule {}
