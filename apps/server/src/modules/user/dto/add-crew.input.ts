import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddCrewInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    phone: string;
}
