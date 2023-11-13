import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VariationService } from './variation.service';
import { Variation } from './entities/variation.entity';
import { CreateVariationInput } from './dto/create-variation.input';
import { UpdateVariationInput } from './dto/update-variation.input';

@Resolver(() => Variation)
export class VariationResolver {
  constructor(private readonly variationService: VariationService) {}

  @Mutation(() => Variation)
  createVariation(@Args('createVariationInput') createVariationInput: CreateVariationInput) {
    return this.variationService.create(createVariationInput);
  }

  @Query(() => [Variation], { name: 'variation' })
  findAll() {
    return this.variationService.findAll();
  }

  @Query(() => Variation, { name: 'variation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.variationService.findOne(id);
  }

  @Mutation(() => Variation)
  updateVariation(@Args('updateVariationInput') updateVariationInput: UpdateVariationInput) {
    return this.variationService.update(updateVariationInput.id, updateVariationInput);
  }

  @Mutation(() => Variation)
  removeVariation(@Args('id', { type: () => Int }) id: number) {
    return this.variationService.remove(id);
  }
}
