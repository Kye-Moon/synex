import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {VariationResourceService} from './variation-resource.service';
import {VariationResource} from './entities/variation-resource.entity';
import {CreateVariationResourceInput} from './dto/create-variation-resource.input';
import {UpdateVariationResourceInput} from './dto/update-variation-resource.input';
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";
import {VariationResourceSummary} from "./entities/variation-resource-summary.entity";

@Resolver(() => VariationResource)
export class VariationResourceResolver {
    constructor(private readonly variationResourceService: VariationResourceService) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => VariationResource)
    createVariationResource(@Args('createVariationResourceInput') createVariationResourceInput: CreateVariationResourceInput) {
        return this.variationResourceService.create(createVariationResourceInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [VariationResource], {name: 'variationResources'})
    variationResources(@Args('variationId', {type: () => String}) variationId: string) {
        return this.variationResourceService.findVariationResources(variationId);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => VariationResourceSummary, {name: 'variationResourceSummary'})
    variationResourceSummary(@Args('variationId', {type: () => String}) variationId: string) {
        return this.variationResourceService.getVariationResourceSummary(variationId);
    }

    @Query(() => VariationResource, {name: 'variationResource'})
    findOne(@Args('id', {type: () => String}) id: string) {
        return this.variationResourceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => VariationResource)
    updateVariationResource(@Args('updateVariationResourceInput') updateVariationResourceInput: UpdateVariationResourceInput) {
        return this.variationResourceService.update(updateVariationResourceInput.id, updateVariationResourceInput);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => VariationResource)
     removeVariationResource(@Args('id', {type: () => String}) id: string) {
        return this.variationResourceService.remove(id);
    }
}
