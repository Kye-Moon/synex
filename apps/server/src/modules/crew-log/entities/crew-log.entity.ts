import {ObjectType, Field, Int} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";
import {Job} from "../../job/entities/job.entity";
import {JobScopeItem} from "../../job-scope-item/entities/job-scope-item.entity";

@ObjectType()
export class CrewLog {
    @Field(() => String)
    id: string;

    @Field(() => User)
    user: User;

    @Field(() => Job)
    job: Job;

    @Field(() => JobScopeItem)
    jobScopeItem: JobScopeItem;

    @Field(() => Date, {nullable: true})
    startTime?: Date;

    @Field(() => Date, {nullable: true})
    endTime?: Date;

    @Field(() => String, {nullable: true})
    notes?: string;

    @Field(() => Date)
    createdAt: Date;
}
