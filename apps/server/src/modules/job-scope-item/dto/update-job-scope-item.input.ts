import { CreateJobScopeItemInput } from './create-job-scope-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobScopeItemInput extends PartialType(CreateJobScopeItemInput) {
  @Field(() => String)
  id: string;
}
