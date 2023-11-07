import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from '@mikro-orm/core';

@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  password: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date = new Date();

  @Field(() => Date, { nullable: true })
  updatedAt = new Date();
}
