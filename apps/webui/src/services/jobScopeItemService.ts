import {graphql} from "gql-types";

export const createJobScopeItem = graphql(`
    mutation createJobScopeItem($input: CreateJobScopeItemInput!) {
        createJobScopeItem(createJobScopeItemInput: $input) {
            id
            jobId
            title
            description
            reference
        }
    }
`)

export const updateJobScopeItem = graphql(`
	mutation updateJobScopeItem($input: UpdateJobScopeItemInput!) {
		updateJobScopeItem(updateJobScopeItemInput: $input) {
			id
			jobId
			title
			description
			reference
		}
	}
`)

export const deleteJobScopeItem = graphql(`
	mutation deleteJobScopeItem($id: String!) {
		removeJobScopeItem(id: $id) {
			id
			jobId
			title
			description
			reference
		}
	}
`)


export const getJobScopeItems = graphql(`
	query getJobScopeItems($jobId: String!) {
		jobScopeItems(jobId: $jobId) {
			id
			jobId
			title
			description
			reference
		}
	}
`)
