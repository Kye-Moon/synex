import { gql, useQuery, useSuspenseQuery } from "@apollo/client";

import { Button } from "@/Lib/src/primitives/Button/Button";

const query = gql`
	query Users {
		users {
			id
			phone
			name
		}
	}
`;

export function UserCard() {
	const { data } = useSuspenseQuery(query);

	return (
		<div className={"text-2xl text-emerald-500"}>
			<Button>Hey</Button>
			{JSON.stringify(data)}
		</div>
	);
}
