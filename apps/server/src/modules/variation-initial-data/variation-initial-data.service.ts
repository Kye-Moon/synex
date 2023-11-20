import {Injectable} from '@nestjs/common';
import {CreateVariationInitialDataInput} from './dto/create-variation-initial-data.input';
import {UpdateVariationInitialDataInput} from './dto/update-variation-initial-data.input';
import {VariationService} from "../variation/variation.service";
import {VariationRepository} from "../variation/variation.repository";
import {RequestService} from "../request/request.service";
import {VariationImageService} from "../variation-image/variation-image.service";
import {VariationInitialDataRepository} from "./variation-initial-data.repository";

@Injectable()
export class VariationInitialDataService {
    constructor(
        private readonly variationInitialDataRepository: VariationInitialDataRepository
    ) {
    }

    create(createVariationInitialDataInput: CreateVariationInitialDataInput) {
        return this.variationInitialDataRepository.create(createVariationInitialDataInput);
    }

    findAll() {
        return `This action returns all variationInitialData`;
    }

    findOne(id: string) {
        return `This action returns a #${id} variationInitialDatum`;
    }

    update(id: string, updateVariationInitialDatumInput: UpdateVariationInitialDataInput) {
        return `This action updates a #${id} variationInitialDatum`;
    }

    remove(id: string) {
        return `This action removes a #${id} variationInitialDatum`;
    }
}
