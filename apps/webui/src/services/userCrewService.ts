import {graphql} from "gql-types";

export const createUserCrew = graphql(`
    mutation CreateUserCrewMutation($input: CreateUserCrewInput!) {
        createUserCrew(createUserCrewInput: $input) {
            id
        }
    }
`);

export const getUserCrew = graphql(`
    query GetUserCrew {
        userCrew {
			id
            name
			phone
        }
    }
`);
