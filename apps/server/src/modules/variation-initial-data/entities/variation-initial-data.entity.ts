import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VariationInitialData {
  @Field(() => String)
  id: string;

  @Field(() => String)
  variationId: string;

  @Field(() => String, {nullable: true})
  hours: string;

  @Field(() => String, {nullable: true})
  numPeople: string;

  @Field(() => String, {nullable: true})
  who: string;

  @Field(() => String, {nullable: true})
  materials: string;

  @Field(() => String, {nullable: true})
  equipment: string;
}
