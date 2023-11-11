import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserCrewInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;
}
