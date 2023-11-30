import {JobWithCrewAndVariationsQuery} from "../../../../../packages/gql-types";
import VariationTable from "@/Pages/VariationsPage/VariationTable/VariationTable";
import {VariationTableColumn} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/Primitives/Table";
import {Checkbox} from "@/Primitives/Checkbox";
import {useNavigate} from "@tanstack/react-router";
import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import {EditIcon, EyeIcon, NewspaperIcon, TrashIcon} from "lucide-react";

interface JobVariationsProps {
	variations: JobWithCrewAndVariationsQuery['variations'] | undefined;
}

export default function JobVariations({variations}: JobVariationsProps) {

	return (
		<div className={'py-4'}>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Title </TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Submitted By</TableHead>
						<TableHead>Flag</TableHead>
						<TableHead>Status</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{variations?.map((variation) => (
						<JobVariationTableRow variation={variation}/>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export function JobVariationTableRow({variation}: {
	variation: JobWithCrewAndVariationsQuery['variations'][0]
}) {
	const navigate = useNavigate();
	const JobsTableColumnActions: Action[] = [
		{
			label: "View / Edit",
			icon: <EditIcon className={"h-4 text-primary/50"}/>,
			onClick: async () => {
				await navigate({
					to: '/variations/$variationId/edit',
					params: {variationId: variation.id},
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
			<TableCell className={'pl-4'}>{'Occured'}</TableCell>
			<TableCell className={'pl-4'}>{"Confirmed"}</TableCell>
			<TableCell className={'pl-4'}>
				<ActionsDropMenu actions={JobsTableColumnActions}/>
			</TableCell>

		</TableRow>
	)
}
