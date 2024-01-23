import { Module } from '@nestjs/common';
import { CrewLogImageService } from './crew-log-image.service';
import { CrewLogImageResolver } from './crew-log-image.resolver';
import {CrewLogImageRepository} from "./crew-log-image.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";

@Module({
  providers: [CrewLogImageResolver, CrewLogImageService, CrewLogImageRepository],
  imports: [DrizzleModule],
  exports: [CrewLogImageService, CrewLogImageRepository]
})
export class CrewLogImageModule {}
