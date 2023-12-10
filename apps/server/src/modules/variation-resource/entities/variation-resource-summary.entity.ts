import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class VariationResourceSummary {
    @Field(() => String)
    variationId: string;

    @Field(() => String)
    labourTotal: string;

    @Field(() => String)
    materialTotal: string;

    @Field(() => String)
    equipmentTotal: string;

    @Field(() => String)
    otherTotal: string;

    @Field(() => String)
    total: string;
}