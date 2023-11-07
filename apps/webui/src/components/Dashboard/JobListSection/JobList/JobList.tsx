import React, { useEffect } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/Primitives/Table";

import JobDetailsCell from "@/Components/Dashboard/JobListSection/JobList/JobDetailsCell";
import JobActionsCell from "@/Components/Dashboard/JobListSection/JobList/JobActionsCell";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { dashboardSearchJobs } from "@/Services/jobService";
import { Job } from "gql-types/gql/graphql";

export default function JobList() {
	const { data } = useSuspenseQuery(dashboardSearchJobs, { variables: { input: {} } });

	return (
		<>
			<Table>
				<TableCaption>Recent Jobs</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Details</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data?.searchJobs.map((job: Partial<Job>) => (
						<TableRow key={job.id}>
							<TableCell className="font-medium">
								<JobDetailsCell job={job} />
							</TableCell>
							<TableCell className="text-right">
								<JobActionsCell jobID={"1"} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}

const jobs: Job[] = [
	{
		id: "1",
		title: "Demo Job name",
		status: "COMPLETE",
		customerName: "BSL - Kevin 007",
		ownerId: "1",
	},
	{
		id: "2",
		title: "Demo Job name",
		status: "COMPLETE",
		customerName: "BSL - Kevin 007",
		ownerId: "2",
	},
];
