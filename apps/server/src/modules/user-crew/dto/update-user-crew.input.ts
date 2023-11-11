import { CreateUserCrewInput } from './create-user-crew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserCrewInput extends PartialType(CreateUserCrewInput) {
  @Field(() => Int)
  id: number;
}
