import {graphql} from "gql-types";

export const variationsTableQuery = graphql(`
    query VariationTableSearchVariations($input: VariationSearchInput!) {
        searchVariations(variationSearchInput: $input) {
            id
            title
            description
			createdAt
            status,
            initialData {
                id
                numPeople
                hours
                materials
                equipment
            }
            job {
                title
            }
            submittedBy {
                name
            }
        }
    }
`)

export const dashboardNotificationsQuery = graphql(`
    query DashboardSearchVariations($input: VariationSearchInput!) {
        searchVariations(variationSearchInput: $input) {
            id
            title
            description
            status,
            job {
                title
            }
            submittedBy {
                name
            }
        }
    }
`)

export const variationQuery = graphql(`
    query Variation($id: String!) {
        variation(id: $id) {
            id
            title
            description
            status
            createdAt
            initialData {
                id
                numPeople
                hours
                materials
                equipment
            }
            job {
                title
                customerName
            }
            submittedBy {
                name
            }
            images {
                id
                url
            }
        }
    }
`)

