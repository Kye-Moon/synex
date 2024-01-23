import {InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateJobAttachmentsInput {
    @Field(() => String)
    jobId: string;

    @Field(() => [AttachmentsInput])
    attachments: AttachmentsInput[];
}

@InputType()
export class AttachmentsInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    url: string;

    @Field(() => String)
    type: string;
}