import { CreateJobRecordInput } from './create-job-record.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobRecordInput extends PartialType(CreateJobRecordInput) {
  @Field(() => String)
  id: string;
}
