import { CreateCrewLogInput } from './create-crew-log.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCrewLogInput extends PartialType(CreateCrewLogInput) {
  @Field(() => String)
  id: string;

  @Field(() => [String], {nullable: true})
  imageUrls?: string[];
}
