import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class JobScopeItem {
    @Field(() => String)
    id: string;

    @Field(() => String)
    jobId: string;

    @Field(() => String, {nullable: true})
    reference: string;

    @Field(() => String, {nullable: true})
    title: string;

    @Field(() => String, {nullable: true})
    description: string;

}
