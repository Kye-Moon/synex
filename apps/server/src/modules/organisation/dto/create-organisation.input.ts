import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrganisationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
