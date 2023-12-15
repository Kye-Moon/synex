import DataTable from "@/Components/DataTable/DataTable";
import {jobsTableColumns} from "@/Components/Jobs/JobsTable/JobsTableColumns";
import {useSuspenseQuery} from "@apollo/client";
import {convertJobsToJobsTableColumns, jobTableSearchJobs} from "@/Services/jobService";
import React, {useMemo} from "react";
import TableEmptyState from "@/Components/TableEmptyState";

export default function JobsTable() {
	const {data} = useSuspenseQuery(jobTableSearchJobs, {variables: {input: {}}});
	const jobs = useMemo(() => convertJobsToJobsTableColumns(data), [data]);

	//Empty state
	if (jobs.length === 0) {
		return (<TableEmptyState mainText={"No jobs found"} subText={"Create a job to get started"}/>)
	}
	return (
		<div>
			<DataTable
				searchColumn={"title"}
				searchPlaceholder={"Search Job"}
				columns={jobsTableColumns}
				data={jobs}
			/>
		</div>
	);
}
