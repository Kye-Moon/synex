import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class JobCrewMember {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    phone: string;

    @Field(() => String)
    role: string;
}
