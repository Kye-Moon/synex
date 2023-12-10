import {Field, ObjectType} from "@nestjs/graphql";
import {Variation} from "./variation.entity";
import {Job} from "../../job/entities/job.entity";
import {JobCrewMember} from "../../job-crew/entities/job-crew.entity";


@ObjectType()
export class VariationSearchEntity extends Variation {
    @Field(() => Variation)
    variation: Variation

    @Field(() => Job)
    job: Job

    @Field(() => [JobCrewMember])
    jobCrew: JobCrewMember[]
}
