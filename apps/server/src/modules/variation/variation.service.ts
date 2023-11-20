import {Injectable} from '@nestjs/common';
import {CreateVariationInput} from './dto/create-variation.input';
import {UpdateVariationInput} from './dto/update-variation.input';
import {RequestService} from "../request/request.service";
import {VariationRepository} from "./variation.repository";
import {VariationImageService} from "../variation-image/variation-image.service";
import {User} from "../user/entities/user.entity";

@Injectable()
export class VariationService {

    constructor(
        private readonly variationRepository: VariationRepository,
        private readonly requestService: RequestService,
        private readonly variationImageService: VariationImageService,
    ) {
    }

    create(createVariationInput: CreateVariationInput) {
        return this.variationRepository.create({
            ...createVariationInput,
            submittedBy: this.requestService.userId,
        })
    }

    findAll() {
        return this.variationRepository.findAll()
    }

    findAllWithDetails() {
        return `This action returns all variation`;
    }


    findOne(id: number) {
        return `This action returns a #${id} variation`;
    }

    async update(id: string, updateVariationInput: UpdateVariationInput) {
        const {imageUrls, ...newVariation} = updateVariationInput
        const variation = await this.variationRepository.update(id, newVariation)

        if (updateVariationInput.imageUrls.length > 0) {
            updateVariationInput.imageUrls.map(async (url) => {
                await this.variationImageService.create({
                    variationId: variation.id,
                    url,
                })
            })
        }

        return variation
    }


    remove(id: number) {
        return `This action removes a #${id} variation`;
    }

    getVariationJob(id: string) {
        return this.variationRepository.findVariationJob(id)
    }

    getVariationSubmittedBy(id: string) {
        return this.variationRepository.findVariationSubmittedBy(id)
    }
}
