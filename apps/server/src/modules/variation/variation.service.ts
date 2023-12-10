import {Injectable} from '@nestjs/common';
import {CreateVariationInput} from './dto/create-variation.input';
import {UpdateVariationInput} from './dto/update-variation.input';
import {RequestService} from "../request/request.service";
import {VariationRepository} from "./variation.repository";
import {VariationImageService} from "../variation-image/variation-image.service";
import {User} from "../user/entities/user.entity";
import {VariationSearchInput} from "./dto/search-variation";

@Injectable()
export class VariationService {

    constructor(
        private readonly variationRepository: VariationRepository,
        private readonly request: RequestService,
        private readonly variationImageService: VariationImageService,
    ) {
    }

    create(createVariationInput: CreateVariationInput) {
        return this.variationRepository.create({
            ...createVariationInput,
            submittedBy: this.request.userId,
        })
    }

    async search(searchInput: VariationSearchInput) {
        const result = await this.variationRepository.search({
            searchInput: searchInput,
            userId: this.request.userId,
        })
        return result.map((variation) => {
            return {
                ...variation.variation,
            }
        })
    }

    findOne(id: string) {
        return this.variationRepository.findOne(id)
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

    findJobVariations(jobId: string) {
        return this.variationRepository.findByJobId(jobId)
    }

    getVariationJob(id: string) {
        return this.variationRepository.findVariationJob(id)
    }

    getVariationSubmittedBy(id: string) {
        return this.variationRepository.findVariationSubmittedBy(id)
    }

    async getVariationInitialData(id: string) {
        return await this.variationRepository.findVariationInitialData(id)
    }
    async getVariationImages(id: string) {
        return await this.variationRepository.findVariationImages(id)
    }
    async getVariationResources(id: string) {
        return await this.variationRepository.findVariationResources(id)
    }
}
