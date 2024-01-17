import {Field, InputType} from '@nestjs/graphql';
import {JobRecordFlag, JobRecordStatus, JobRecordType} from "../entities/job-record.entity";

@InputType()
export class CreateJobRecordInput {
    @Field(() => String)
    jobId: string

    @Field(() => String, {nullable: true})
    scopeRef?: string

    @Field(() => String)
    title: string

    @Field(() => String, {nullable: true})
    description: string

    @Field(() => String, {nullable: true})
    status: JobRecordStatus

    @Field(() => String, {nullable: true})
    flag: JobRecordFlag

    @Field(() => String)
    type: JobRecordType

    @Field(() => String, {nullable: true})
    hours: string;

    @Field(() => String, {nullable: true})
    numPeople: string;

    @Field(() => String, {nullable: true})
    who: string;

    @Field(() => String, {nullable: true})
    materials: string;

    @Field(() => String, {nullable: true})
    equipment: string;

    @Field(() => [String], {nullable: true})
    imageUrls?: string[]
}