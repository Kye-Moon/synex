import {InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateVariationInput {
    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    @Field(() => String)
    customer: string

    @Field(() => String)
    jobId: string
}
