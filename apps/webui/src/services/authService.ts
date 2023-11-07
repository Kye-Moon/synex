import { graphql } from "../../../../packages/gql-types";

export const loginMutation = graphql(`
	mutation LoginMutation($input: LoginInput!) {
		login(loginUserInput: $input) {
			access_token
		}
	}
`);
