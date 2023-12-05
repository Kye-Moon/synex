import { graphql, Job, JobsTableSearchJobsQuery } from "gql-types";

export const variationsTableQuery = graphql(`
    query VariationTableSearchVariations($input: VariationSearchInput!) {
        searchVariations(variationSearchInput: $input) {
            id
            title
            description
			createdAt
            job {
                title
            }
            submittedBy {
                name
            }
        }
    }
`)
