import {Injectable} from '@nestjs/common';
import {OrganisationRepository} from "./organisation.repository";
import {NewOrganisation} from "../drizzle/schema";

@Injectable()
export class OrganisationService {
    constructor(
        private readonly organisationRepository: OrganisationRepository,
    ) {
    }

    async findOrCreateByAuthServiceId(input: NewOrganisation) {
        const organisation = await this.organisationRepository.findOneByAuthServiceId(input.authServiceId);
        if (organisation) {
            return organisation;
        }
        return await this.organisationRepository.create(input);
    }

}
