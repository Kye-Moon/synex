import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class JobRecordImage {
    @Field(() => String)
    id: string;

    @Field(() => String)
    jobRecordId: string;

    @Field(() => String)
    url: string;

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
