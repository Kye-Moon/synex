import {InputType, Field} from '@nestjs/graphql';
import {JobStatus} from '../entities/job.entity';
import {
    CreateJobScopeItemInput,
    CreateJobScopeItemViaJobInput
} from "../../job-scope-item/dto/create-job-scope-item.input";

@InputType()
export class CreateJobInput {
    @Field(() => String)
    title: string;

    @Field(() => String, {nullable: true})
    description: string;

    @Field(() => String, {nullable: true})
    customerName: string;

    @Field(() => String, {nullable: true})
    status: JobStatus;

    @Field(() => Date, {nullable: true})
    dueDate: Date;

    @Field(() => [String], {nullable: true})
    crew: string[];

    @Field(() => [CreateJobScopeItemViaJobInput], {nullable: true})
    scopeItems: CreateJobScopeItemViaJobInput[];
}
