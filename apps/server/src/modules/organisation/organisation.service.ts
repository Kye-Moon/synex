import {Injectable} from '@nestjs/common';
import {CreateOrganisationInput} from './dto/create-organisation.input';
import {UpdateOrganisationInput} from './dto/update-organisation.input';
import {OrganisationRepository} from "./organisation.repository";

@Injectable()
export class OrganisationService {

    constructor(
        private readonly organisationRepository: OrganisationRepository,
    ) {
    }

    create(createOrganisationInput: CreateOrganisationInput) {
        return this.organisationRepository.create(createOrganisationInput);
    }

    findAll() {
        return `This action returns all organisation`;
    }

    async findOne(id: string) {
        return await this.organisationRepository.findOneById(id)
    }

    findOneByName(name: string) {
        return this.organisationRepository.findOneByName(name);
    }

    async update(id: string, updateOrganisationInput: UpdateOrganisationInput) {
        return await this.organisationRepository.update(id, updateOrganisationInput);
    }

    remove(id: number) {
        return `This action removes a #${id} organisation`;
    }
}
