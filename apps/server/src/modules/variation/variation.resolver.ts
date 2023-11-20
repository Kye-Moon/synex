import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import {VariationService} from './variation.service';
import {Variation} from './entities/variation.entity';
import {CreateVariationInput} from './dto/create-variation.input';
import {UpdateVariationInput} from './dto/update-variation.input';
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";
import {VariationWithDetails} from "./entities/variation-with-details.entity";
import {Job} from "../job/entities/job.entity";
import {JobService} from "../job/job.service";
import {User} from "../user/entities/user.entity";

@Resolver(() => Variation)
export class VariationResolver {
    constructor(
        private readonly variationService: VariationService,) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Variation)
    createVariation(@Args('createVariationInput') createVariationInput: CreateVariationInput) {
        return this.variationService.create(createVariationInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [Variation], {name: 'variations'})
    findAll() {
        return this.variationService.findAll();
    }

    @Query(() => Variation, {name: 'variation'})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.variationService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Variation)
    async updateVariation(@Args('updateVariationInput') updateVariationInput: UpdateVariationInput) {
        console.log("Input", updateVariationInput)
        const variation = await this.variationService.update(updateVariationInput.id, updateVariationInput);
        console.log(variation)
        return variation;
    }

    @Mutation(() => Variation)
    removeVariation(@Args('id', {type: () => Int}) id: number) {
        return this.variationService.remove(id);
    }

    @ResolveField(() => Job)
    async job(@Parent() variation: Variation) {
        const {id} = variation;
        return this.variationService.getVariationJob(id);
    }

    @ResolveField(() => User)
    async submittedBy(@Parent() user: User) {
        const {id} = user;
        return this.variationService.getVariationSubmittedBy(id);
    }

}
