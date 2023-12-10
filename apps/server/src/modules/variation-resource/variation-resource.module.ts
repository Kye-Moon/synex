import { Module } from '@nestjs/common';
import { VariationResourceService } from './variation-resource.service';
import { VariationResourceResolver } from './variation-resource.resolver';
import {VariationResourceRepository} from "./variation-resource.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";

@Module({
  providers: [VariationResourceResolver, VariationResourceService,VariationResourceRepository],
  imports: [DrizzleModule],
  exports: [VariationResourceService,VariationResourceRepository],
})
export class VariationResourceModule {}
