import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import OrganisationMemberTable from "@/Components/OrganisationMemberTable/OrganisationMemberTable";
import {SearchUserInput} from "server/dist/src/modules/user/dto/search-user.input";

const query = graphql(`
	query AdminPageTableSection($input: SearchUserInput!) {
		searchUsers(userSearchInput: $input) {
			id
			name
			phone
			role
		}
	}
`)

export default function AdminPageTableSection() {
	const {data} = useSuspenseQuery(query, {variables: {input: {role:["ADMIN","OWNER"]}}})

	return (
		<OrganisationMemberTable showSelect={false} members={data.searchUsers}
								 tableCaption={"Supervisors"}/>
	)
}
