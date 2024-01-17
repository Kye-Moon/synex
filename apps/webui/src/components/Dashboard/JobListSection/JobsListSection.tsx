import JobList from "@/Components/Dashboard/JobListSection/JobList/JobList";
import {Suspense} from "react";
import TableWithHeaderLoadingSkeleton
	from "@/Components/Loading/Skeletons/TableWithHeaderLoadingSkeleton";

export default function JobListSection() {
	return (
		<>
			<h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
				Jobs
			</h2>
			<div className="rounded-lg bg-white shadow">
				<div className="p-6">
					<Suspense fallback={<TableWithHeaderLoadingSkeleton/>}>
						<JobList/>
					</Suspense>
				</div>
			</div>
		</>
	);
}
