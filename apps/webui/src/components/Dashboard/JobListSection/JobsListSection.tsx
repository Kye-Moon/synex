import JobList from "@/Components/Dashboard/JobListSection/JobList/JobList";
import { Suspense } from "react";

export default function JobListSection() {
	return (
		<>
			<h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
				Jobs
			</h2>
			<div className=" rounded-lg bg-white shadow">
				<div className="p-6">
					<Suspense fallback={<div>Loading...</div>}>
						<JobList />
					</Suspense>
				</div>
			</div>
		</>
	);
}
