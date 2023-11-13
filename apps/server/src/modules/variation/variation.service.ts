import {Inject, Injectable} from '@nestjs/common';
import { CreateVariationInput } from './dto/create-variation.input';
import { UpdateVariationInput } from './dto/update-variation.input';
import {JobRepository} from "../job/job.repository";
import {RequestService} from "../request/request.service";
import {JobCrewService} from "../job-crew/job-crew.service";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres/index";
import * as schema from "../../drizzle/schema";
import {VariationRepository} from "./variation.repository";

@Injectable()
export class VariationService {

  constructor(
      private readonly variationRepository: VariationRepository,
  ) {
  }
  create(createVariationInput: CreateVariationInput) {
    // const variation = this.variationRepository.create(createVariationInput)
  }

  findAll() {
    return `This action returns all variation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variation`;
  }

  update(id: number, updateVariationInput: UpdateVariationInput) {
    return `This action updates a #${id} variation`;
  }

  remove(id: number) {
    return `This action removes a #${id} variation`;
  }
}
