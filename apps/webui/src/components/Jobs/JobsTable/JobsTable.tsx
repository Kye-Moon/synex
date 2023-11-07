import DataTable from "@/Components/DataTable/DataTable";
import { jobsTableColumns } from "@/Components/Jobs/JobsTable/JobsTableColumns";
import { useSuspenseQuery } from "@apollo/client";
import { convertJobsToJobsTableColumns, jobTableSearchJobs } from "@/Services/jobService";
import { useMemo } from "react";

export default function JobsTable() {
	const { data } = useSuspenseQuery(jobTableSearchJobs, { variables: { input: {} } });
	const jobs = useMemo(() => convertJobsToJobsTableColumns(data), [data]);

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
