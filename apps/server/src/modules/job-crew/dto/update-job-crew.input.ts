import { CreateJobCrewInput } from './create-job-crew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobCrewInput extends PartialType(CreateJobCrewInput) {
  @Field(() => Int)
  id: number;
}
