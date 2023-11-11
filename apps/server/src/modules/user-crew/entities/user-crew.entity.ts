import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class UserCrew {
    @Field(() => String)
    id: string;

    @Field(() => String)
    userId: string;

    @Field(() => String)
    crewMemberId: string;
}
