import {Module} from '@nestjs/common';
import {OrganisationService} from './organisation.service';
import {OrganisationController} from './organisation.controller';
import {OrganisationRepository} from "./organisation.repository";
import {DrizzleModule} from "../drizzle/drizzle.module";

@Module({
    controllers: [OrganisationController],
    providers: [OrganisationService, OrganisationRepository],
    imports: [
        DrizzleModule,
    ],
    exports: [OrganisationService, OrganisationRepository],
})
export class OrganisationModule {
}
