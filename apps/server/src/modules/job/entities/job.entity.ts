import {Field, ObjectType} from '@nestjs/graphql';
import {Variation} from "../../variation/entities/variation.entity";

@ObjectType()
export class Job {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String, {nullable: true})
    description?: string;

    @Field(() => String, {nullable: true})
    customerName: string;

    @Field(() => String, {nullable: true})
    status: JobStatus;

    @Field(() => String)
    ownerId: string;

    @Field(() => Date, {nullable: true})
    dueDate: Date;

    @Field(() => Date, {nullable: true})
    createdAt: Date = new Date();

    @Field(() => Date, {nullable: true})
    updatedAt = new Date();

    @Field(() => [Variation], {nullable: true})
    variations: Variation[];
}

export enum JobStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED',
    ARCHIVED = 'ARCHIVED',
}
