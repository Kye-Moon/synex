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

export const dashboardSearchJobs = graphql(`
	query DashboardSearchJobs($input: JobSearchInput!) {
		searchJobs(jobSearchInput: $input) {
			id
			title
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

export const jobQuery = graphql(`
	query JobPageQuery($jobId: String!) {
		job(id: $jobId) {
			id
			title
			description
			ownerId
			status
			customerName
			createdAt
			dueDate
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
