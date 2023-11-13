import {Module} from '@nestjs/common';
import {VariationService} from './variation.service';
import {VariationResolver} from './variation.resolver';
import {VariationRepository} from "./variation.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";
import {RequestModule} from "../request/request.module";

@Module({
    providers: [VariationResolver, VariationService, VariationRepository],
    imports: [
        DrizzleModule,
        RequestModule,
    ],
    exports: [VariationService, VariationRepository],
})
export class VariationModule {
}
