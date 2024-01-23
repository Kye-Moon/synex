import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class JobAttachment {
    @Field(() => String)
    id: string;

    @Field(() => String)
    jobId: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    url: string;

    @Field(() => String)
    type: string;

    @Field(() => String)
    createdAt: string;

    @Field(() => String)
    updatedAt: string;
}
