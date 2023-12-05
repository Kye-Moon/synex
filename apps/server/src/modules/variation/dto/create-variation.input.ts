import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class CreateVariationInput {
    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    @Field(() => String)
    jobId: string

    @Field(() => [String], {nullable: true})
    imageUrls?: string[]
}
