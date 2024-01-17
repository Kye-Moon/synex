import {Field, ObjectType} from '@nestjs/graphql';

export type VariationResourceType = "LABOUR" | "MATERIAL" | "EQUIPMENT" | "OTHER";
@ObjectType()
export class VariationResource {
  @Field(() => String)
  id: string;

  @Field(() => String)
  jobRecordId: string;

  @Field(() => String)
  type: VariationResourceType;

  @Field(() => String, {nullable: true})
  description?: string;

  @Field(() => String, {nullable: true})
  quantity?: string;

  @Field(() => String, {nullable: true})
  unit?: string;

  @Field(() => String, {nullable: true})
  unitPrice?: string;

  @Field(() => String, {nullable: true})
  hours?: string;

  @Field(() => String, {nullable: true})
  rate?: string;

  @Field(() => String, {nullable: true})
  numPeople?: string;

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}

