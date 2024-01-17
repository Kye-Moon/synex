import OrganisationMemberTable from "@/Components/OrganisationMemberTable/OrganisationMemberTable";
import {useSuspenseQuery} from "@apollo/client";
import {graphql} from "../../../../../packages/gql-types";
import TableEmptyState from "@/Components/TableEmptyState";
import React from "react";

const query = graphql(`
    query CrewPageTableSection($input: SearchUserInput!) {
        searchUsers(userSearchInput: $input) {
            id
            name
            phone
            role
        }
    }
`)

interface CrewTableSectionProps {
    showSelect?: boolean;
    tableCaption?: string;
    initialSelected?: string[];
}

export default function CrewTableSection({showSelect, tableCaption,  initialSelected = []}: CrewTableSectionProps) {
    const {data} = useSuspenseQuery(query, {variables: {input: {role: ["CREW_MEMBER", "SUPERVISOR"]}}})

	//Empty state
	if (data.searchUsers.length === 0) {
		return (<TableEmptyState mainText={"No crew members found"} subText={"Invite crew members to add them to jobs"}/>)
	}
    return (
        <OrganisationMemberTable
            members={data.searchUsers}
            showSelect={showSelect}
            tableCaption={tableCaption}
            initialSelected={initialSelected}
        />
    )
}
