import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  email: string;
}
