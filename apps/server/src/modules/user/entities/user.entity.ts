import {Field, ObjectType} from '@nestjs/graphql';
import {Organisation} from "../../organisation/entities/organisation.entity";


export type UserRoles = "OWNER" | "ADMIN" | "SUPERVISOR" | "CREW_MEMBER";
export type UserStatus = "ACTIVE" | "INVITED" | "DEACTIVATED"

@ObjectType()
export class User {
    @Field(() => String)
    id: string;

    @Field(() => String,{nullable: true})
    phone?: string;

    @Field(() => String)
    password: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    organisationId: string;

    @Field(() => String)
    role: UserRoles;

    @Field(() => String)
    status: UserStatus;

    @Field(() => Organisation)
    organisation?: Organisation;

    @Field(() => Date)
    createdAt: Date = new Date();

    @Field(() => Date)
    updatedAt = new Date();
}
