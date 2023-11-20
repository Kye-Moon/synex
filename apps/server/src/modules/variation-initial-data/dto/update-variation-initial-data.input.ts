import { CreateVariationInitialDataInput } from './create-variation-initial-data.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVariationInitialDataInput extends PartialType(CreateVariationInitialDataInput) {
  @Field(() => String)
  id: string;
}
