import {Field, InputType, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UserCrewResponse {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    phone: string;
}
