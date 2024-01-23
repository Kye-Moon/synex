import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class CreateCrewLogInput {
    @Field(() => String)
    jobId: string;

    @Field(() => String, {nullable: true})
    jobScopeItemId?: string;

    @Field(() => Date, {nullable: true})
    startTime?: Date;

    @Field(() => Date, {nullable: true})
    endTime?: Date;

    @Field(() => String, {nullable: true})
    notes?: string;
}
