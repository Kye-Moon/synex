import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class VariationImage {
    @Field(() => String)
    id: string;

    @Field(() => String)
    variationId: string;

    @Field(() => String)
    url: string;

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
