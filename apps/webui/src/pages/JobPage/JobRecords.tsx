import {JobWithCrewAndVariationsQuery} from "gql-types";
import {TableCell, TableRow} from "@/Primitives/Table";
import {useNavigate} from "@tanstack/react-router";
import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import {EditIcon, NewspaperIcon, TrashIcon} from "lucide-react";
import JobRecordTable from "@/Pages/JobRecordsPage/JobRecordsTable/JobRecordTable";
import {Suspense} from "react";

interface JobVariationsProps {
	jobId: string | undefined;
}

export default function JobRecords({jobId}: JobVariationsProps) {

	return (
		<div className={'py-4'}>
			<Suspense fallback={<div>Loading...</div>}>
				<JobRecordTable jobId={jobId}/>
			</Suspense>
		</div>
	)
}

export function JobVariationTableRow({variation}: {
	variation: JobWithCrewAndVariationsQuery['searchJobRecords'][0]
}) {
	const navigate = useNavigate();
	const JobsTableColumnActions: Action[] = [
		{
			label: "View / Edit",
			icon: <EditIcon className={"h-4 text-primary/50"}/>,
			onClick: async () => {
				await navigate({
					to: '/job-records/$jobRecordId/edit',
					params: {jobRecordId: variation.id},
				})
			}
		},
		{
			label: "Confirm",
			icon: <NewspaperIcon className={"h-4 text-primary/50"}/>,
		},
		{
			label: "Archive",
			icon: <TrashIcon className={"h-4 text-destructive/50"}/>,
		},
	];
	return (
		<TableRow key={variation.id}>
			<TableCell className={'pl-4'}>{variation.title}</TableCell>
			<TableCell className={'pl-4'}>{variation.description}</TableCell>
			<TableCell className={'pl-4'}>{variation.submittedBy.name}</TableCell>
			<TableCell className={'pl-4'}>
				<ActionsDropMenu actions={JobsTableColumnActions}/>
			</TableCell>

		</TableRow>
	)
}
