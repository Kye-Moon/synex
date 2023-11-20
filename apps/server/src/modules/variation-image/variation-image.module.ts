import { Module } from '@nestjs/common';
import { VariationImageService } from './variation-image.service';
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";

@Module({
  providers: [VariationImageService],
  imports: [
    DrizzleModule,
    RequestModule,
  ],
    exports: [VariationImageService],
})
export class VariationImageModule {}
