import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class Variation {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    @Field(() => String)
    customer: string
}
