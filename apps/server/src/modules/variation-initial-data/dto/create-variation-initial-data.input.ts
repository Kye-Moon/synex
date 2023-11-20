import {InputType, Field, Float} from '@nestjs/graphql';

@InputType()
export class CreateVariationInitialDataInput {
    @Field(() => String)
    variationId: string;

    @Field(() => String, {nullable: true})
    hours: string;

    @Field(() => String, {nullable: true})
    numPeople: string;

    @Field(() => String, {nullable: true})
    who: string;

    @Field(() => String, {nullable: true})
    materials: string;

    @Field(() => String, {nullable: true})
    equipment: string;
}
