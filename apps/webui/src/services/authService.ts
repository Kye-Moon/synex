import {graphql} from "../../../../packages/gql-types";

export const loginMutation = graphql(`
	mutation LoginMutation($input: LoginInput!) {
		login(loginUserInput: $input) {
			access_token
		}
	}
`);

export const signupMutation = graphql(`
	mutation SignUpMutation($input: SignUpInput!) {
		signup(signupInput: $input) {
			access_token
		}
	}
`);
