import {Field, ObjectType} from "@nestjs/graphql";
import {Variation} from "./variation.entity";
import {Job} from "../../job/entities/job.entity";
import {User} from "../../user/entities/user.entity";

@ObjectType()
export class VariationWithDetails extends Variation {
    @Field(() => Job)
    job: Job

    @Field(() => User)
    submittedBy: User
}
