import React from 'react';
import {Text} from "@gluestack-ui/themed";
import {graphql} from "gql-types";
import {useQuery} from "@apollo/client";


export const dashboardSearchJobs = graphql(`
    query DashboardSearchJobsMobile($input: JobSearchInput!) {
        searchJobs(jobSearchInput: $input) {
            id
            title
            customerName
            status
            dueDate
            description
        }
    }
`);

export default function Jobs() {
    const {data, loading, error} = useQuery(dashboardSearchJobs,{variables: {input: {}}})

    return (
        <Text>{JSON.stringify(data)}</Text>
    );
}
