import {Field, ObjectType} from '@nestjs/graphql';
import {Job} from "../../job/entities/job.entity";
import {User} from "../../user/entities/user.entity";
import {VariationInitialData} from "../../variation-initial-data/entities/variation-initial-data.entity";

@ObjectType()
export class Variation {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    @Field(() => Job)
    job: Job

    @Field(() => User)
    submittedBy: User

    @Field(() => VariationInitialData)
    initialData: VariationInitialData

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
