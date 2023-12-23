import {Field, ObjectType} from '@nestjs/graphql';
import {Job} from "../../job/entities/job.entity";
import {User} from "../../user/entities/user.entity";
import {VariationInitialData} from "../../variation-initial-data/entities/variation-initial-data.entity";
import {VariationImage} from "../../variation-image/entities/variation-image.entity";

@ObjectType()
export class Variation {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string

    @Field(() => String)
    description: string

    @Field(() => String)
    status: string

    @Field(() => Job)
    job: Job

    @Field(() => User)
    submittedBy: User

    @Field(() => VariationInitialData, {nullable: true})
    initialData: VariationInitialData

    @Field(() => [VariationImage])
    images: VariationImage[]

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
