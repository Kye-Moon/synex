import {Field, ObjectType} from "@nestjs/graphql";
import {JobRecord} from "./job-record.entity";
import {Job} from "../../job/entities/job.entity";
import {JobCrewMember} from "../../job-crew/entities/job-crew.entity";


@ObjectType()
export class JobRecordSearchEntity extends JobRecord {
    @Field(() => JobRecord)
    variation: JobRecord

    @Field(() => Job)
    job: Job

    @Field(() => [JobCrewMember])
    jobCrew: JobCrewMember[]
}
