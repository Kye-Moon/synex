import JobRecordList from "./JobRecordList";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import React from "react";

const Query = graphql(`
    query VariationsCell($input: JobRecordSearchInput!) {
        searchJobRecords(jobRecordSearchInput: $input) {
            id
            title
            description
            type
            job {
                title
            }
            submittedBy {
                name
            }
        }
    }
`)
export default function VariationsCell() {
    const {data} = useSuspenseQuery(Query, {variables: {input: {}}})
    return (
        <>
            <JobRecordList jobRecords={data.searchJobRecords}/>
        </>

    )
}