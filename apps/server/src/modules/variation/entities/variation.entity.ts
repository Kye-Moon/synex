import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Job} from "../../job/entities/job.entity";
import {User} from "../../user/entities/user.entity";

@ObjectType()
export class Variation {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    // @Field(() => String)
    // customer: string

    @Field(() => Job)
    job: Job

    @Field(() => User)
    submittedBy: User
}
