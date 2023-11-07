import { Injectable } from '@nestjs/common';
import { CreateOrganisationInput } from './dto/create-organisation.input';
import { UpdateOrganisationInput } from './dto/update-organisation.input';

@Injectable()
export class OrganisationService {
  create(createOrganisationInput: CreateOrganisationInput) {
    return 'This action adds a new organisation';
  }

  findAll() {
    return `This action returns all organisation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organisation`;
  }

  update(id: number, updateOrganisationInput: UpdateOrganisationInput) {
    return `This action updates a #${id} organisation`;
  }

  remove(id: number) {
    return `This action removes a #${id} organisation`;
  }
}
