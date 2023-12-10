import {CreateVariationResourceInput} from './create-variation-resource.input';
import {Field, InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateVariationResourceInput extends PartialType(CreateVariationResourceInput) {
  @Field(() => String)
  id: string;
}
