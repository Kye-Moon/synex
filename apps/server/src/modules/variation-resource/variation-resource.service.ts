import {Injectable} from '@nestjs/common';
import {CreateVariationResourceInput} from './dto/create-variation-resource.input';
import {UpdateVariationResourceInput} from './dto/update-variation-resource.input';
import {VariationResourceRepository} from "./variation-resource.repository";
import {VariationResource} from "./entities/variation-resource.entity";
import {VariationResourceSummary} from "./entities/variation-resource-summary.entity";

@Injectable()
export class VariationResourceService {
    constructor(private readonly variationResourceRepository: VariationResourceRepository) {
    }

    create(createVariationResourceInput: CreateVariationResourceInput) {
        return this.variationResourceRepository.create(createVariationResourceInput);
    }

    findVariationResources(id: string) {
        return this.variationResourceRepository.findVariationResources(id);
    }

    async getVariationResourceSummary(id: string) {
        console.log(id)
        const variationResources = await this.variationResourceRepository.findVariationResources(id)
        const totals = this.calculateTotals(variationResources);
        const summary: VariationResourceSummary = {
            variationId: id,
            labourTotal: totals.labourTotal.toString(),
            materialTotal: totals.materialTotal.toString(),
            equipmentTotal: totals.equipmentTotal.toString(),
            otherTotal: totals.otherTotal.toString(),
            total: (totals.labourTotal + totals.materialTotal + totals.equipmentTotal + totals.otherTotal).toString()
        }
        return summary;
    }

    calculateTotals(variationResources: VariationResource[]): Record<string, number> {
        return variationResources.reduce(
            (acc, item) => {
                const quantity = parseFloat(item.quantity) || 0;
                const unitPrice = parseFloat(item.unitPrice) || 0;
                const hours = parseFloat(item.hours) || 0;
                const rate = parseFloat(item.rate) || 0;
                const numPeople = parseFloat(item.numPeople) || 0;

                switch (item.type) {
                    case 'LABOUR':
                        acc.labourTotal += hours * rate * numPeople;
                        break;
                    case 'MATERIAL':
                        acc.materialTotal += quantity * unitPrice;
                        break;
                    case 'EQUIPMENT':
                        acc.equipmentTotal += quantity * unitPrice;
                        break;
                    case 'OTHER':
                        acc.otherTotal += unitPrice;
                        break;
                    default:
                        break;
                }

                return acc;
            },
            {
                labourTotal: 0,
                materialTotal: 0,
                equipmentTotal: 0,
                otherTotal: 0,
            }
        );
    }


    findOne(id: string) {
        return `This action returns a #${id} variationResource`;
    }

    update(id: string, updateVariationResourceInput: UpdateVariationResourceInput) {
        return this.variationResourceRepository.update(id, updateVariationResourceInput);
    }

    remove(id: string) {
        return this.variationResourceRepository.delete(id);
    }
}
