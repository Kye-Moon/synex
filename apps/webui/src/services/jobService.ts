import { graphql, Job, JobsTableSearchJobsQuery } from "gql-types";
import { JobsTableColumn } from "@/Components/Jobs/JobsTable/JobsTableColumns";

export const createNewJob = graphql(`
	mutation CreateJobMutation($input: CreateJobInput!) {
		createJob(createJobInput: $input) {
			id
			title
		}
	}
`);

export const updateJob = graphql(`
    mutation UpdateJob($input: UpdateJobInput!) {
        updateJob(updateJobInput: $input){
            id	
        }
    }
`);

export const dashboardSearchJobs = graphql(`
	query DashboardSearchJobs($input: JobSearchInput!) {
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

export const jobTableSearchJobs = graphql(`
	query JobsTableSearchJobs($input: JobSearchInput!) {
		searchJobs(jobSearchInput: $input) {
			id
			title
			status
			customerName
			dueDate
		}
	}
`);

export const jobWithCrewQuery = graphql(`
	query JobWithCrew($jobId: String!) {
		job(id: $jobId) {
			id
			title
			description
			ownerId
			status
			customerName
			createdAt
			dueDate
		},
		jobCrew(jobId: $jobId) {
			id
			name
		}
	}
`);

export const jobWithCrewAndVariationsQuery = graphql(`
	query JobWithCrewAndVariations($jobId: String!) {
		job(id: $jobId) {
			id
			title
			description
			ownerId
			status
			customerName
			createdAt
			dueDate
		},
		jobCrew(jobId: $jobId) {
			id
			name
			phone
		},
		variations {
			id
			title
			description
			submittedBy {
				id
				name
			}
		}
	}
`);



export const convertJobsToJobsTableColumns = (
	jobs: JobsTableSearchJobsQuery
): JobsTableColumn[] => {
	return jobs.searchJobs.map((job) => {
		const column: JobsTableColumn = {
			id: job.id,
			title: job.title,
			status: job.status || "-",
			customer: job.customerName || "-",
			numVariations: 20,
			dueDate: job.dueDate || "-",
		};
		return column;
	});
};
