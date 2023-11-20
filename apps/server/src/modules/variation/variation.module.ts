import {Module} from '@nestjs/common';
import {VariationService} from './variation.service';
import {VariationResolver} from './variation.resolver';
import {VariationRepository} from "./variation.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";
import {JobModule} from "../job/job.module";
import {VariationImageModule} from "../variation-image/variation-image.module";

@Module({
    providers: [VariationResolver, VariationService, VariationRepository],
    imports: [
        DrizzleModule,
        RequestModule,
        JobModule,
        VariationImageModule
    ],
    exports: [VariationService, VariationRepository],
})
export class VariationModule {
}
