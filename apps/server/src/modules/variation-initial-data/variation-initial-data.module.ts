import {Module} from '@nestjs/common';
import {VariationInitialDataService} from './variation-initial-data.service';
import {VariationInitialDataResolver} from './variation-initial-data.resolver';
import {VariationInitialDataRepository} from "./variation-initial-data.repository";
import {DrizzleModule} from "../../drizzle/drizzle.module";

@Module({
    providers: [VariationInitialDataResolver, VariationInitialDataService, VariationInitialDataRepository],
    imports: [
        DrizzleModule
    ],
    exports: [VariationInitialDataService, VariationInitialDataRepository],
})
export class VariationInitialDataModule {
}
