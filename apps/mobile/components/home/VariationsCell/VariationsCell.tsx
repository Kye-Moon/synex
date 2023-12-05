import VariationList from "./VariationList";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import React from "react";

const Query = graphql(`
    query VariationsCell($input: VariationSearchInput!) {
        searchVariations(variationSearchInput: $input) {
            id
            title
            description
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
            <VariationList variations={data.searchVariations}/>
        </>

    )
}