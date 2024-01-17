import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {VariationInitialDataService} from './variation-initial-data.service';
import {VariationInitialData} from './entities/variation-initial-data.entity';
import {CreateVariationInitialDataInput} from './dto/create-variation-initial-data.input';

@Resolver(() => VariationInitialData)
export class VariationInitialDataResolver {
  constructor(private readonly variationInitialDataService: VariationInitialDataService) {}

  @Mutation(() => VariationInitialData)
  createVariationInitialData(@Args('createVariationInitialDataInput') createVariationInitialDataInput: CreateVariationInitialDataInput) {
    return this.variationInitialDataService.create(createVariationInitialDataInput, "");
  }

  // @Query(() => [VariationInitialData], { name: 'variationInitialData' })
  // findAll() {
  //   return this.variationInitialDataService.findAll();
  // }
  //
  // @Query(() => VariationInitialData, { name: 'variationInitialData' })
  // findOne(@Args('id', { type: () => String }) id: string) {
  //   return this.variationInitialDataService.findOne(id);
  // }
  //
  // @Mutation(() => VariationInitialData)
  // updateVariationInitialData(@Args('updateVariationInitialDataInput') updateVariationInitialDataInput: UpdateVariationInitialDataInput) {
  //   return this.variationInitialDataService.update(updateVariationInitialDataInput.id, updateVariationInitialDataInput);
  // }
  //
  // @Mutation(() => VariationInitialData)
  // removeVariationInitialData(@Args('id', { type: () => String }) id: string) {
  //   return this.variationInitialDataService.remove(id);
  // }
}
