import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String)
  phoneNumber: string;
  @Field(() => String)
  password: string;
}
