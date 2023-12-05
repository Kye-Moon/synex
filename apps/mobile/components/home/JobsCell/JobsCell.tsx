import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import {useToast} from "@gluestack-ui/themed";
import JobsList from "./JobsList";
import React from "react";

const query = graphql(`
    query JobsCell($input: JobSearchInput!) {
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

export default function JobsCell() {
    const {data, error} = useSuspenseQuery(query, {
        variables: {input: {}}
    });

    return (
        <JobsList jobs={data.searchJobs}/>
    )
}
