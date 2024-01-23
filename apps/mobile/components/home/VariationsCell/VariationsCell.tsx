import JobRecordList from "./JobRecordList";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import React from "react";

export const variationsCellQuery = graphql(`
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
    const {data} = useSuspenseQuery(variationsCellQuery, {variables: {input: {}}})
    return (
        <>
            <JobRecordList jobRecords={data.searchJobRecords}/>
        </>

    )
}