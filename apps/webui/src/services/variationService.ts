import {graphql} from "gql-types";

export const variationsTableQuery = graphql(`
    query VariationTableSearchVariations($input: JobRecordSearchInput!) {
		searchJobRecords(jobRecordSearchInput: $input) {
            id
            title
            description
			createdAt
            status,
            type,
            flag,
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
    query DashboardSearchVariations($input: JobRecordSearchInput!) {
		searchJobRecords(jobRecordSearchInput: $input) {
            id
            title
            description
            status,
            flag,
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

export const jobRecordQuery = graphql(`
    query Variation($id: String!) {
		jobRecord(id: $id) {
            id
            title
            description
            status
            type
            flag
            createdAt
            initialData {
                id
                numPeople
                hours
                materials
                equipment
				who
            }
            job {
                id 
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

export const jobRecordUpdateMutation = graphql(`
    mutation UpdateJobRecord($input: UpdateJobRecordInput!) {
        updateJobRecord(updateJobRecordInput: $input) {
            id
        }
    }
`);
