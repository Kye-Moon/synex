import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown, EyeIcon} from "lucide-react";
import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import moment from "moment";
import {useNavigate} from "@tanstack/react-router";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getVariationStatusBadgeVariant} from "@/Lib/utils";

export interface VariationTableColumn {
	id: string;
	jobName: string;
	description: string;
	title: string;
	submittedBy: string;
	createdAt: string;
	estimatedPeople?: string | null;
	estimatedTime?: string | null;
	material?: string | null;
	equipment?: string | null;
}



const getPriorityBadgeVariant = (priority: string) => {
	switch (priority) {
		case "LOW":
			return "green";
		case "MEDIUM":
			return "yellow";
		case "HIGH":
			return "red";
	}
};

export const variationTableColumns: ColumnDef<VariationTableColumn>[] = [
	{
		accessorKey: "title",
		header: "Name",
	},
	{
		accessorKey: "jobName",
		header: "Job",
	},
	{
		accessorKey: "submittedBy",
		header: "Submitted by",
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return (
				<button
					className={"flex items-center"}
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			return moment(row.getValue("createdAt")).isValid()
				? moment(row.getValue("createdAt")).toDate().toDateString()
				: "-";
		},
	},
	{
		accessorKey: "estimatedTime",
		header: "Est. hours",
	},
	{
		accessorKey: "estimatedPeople",
		header: "Est. Crew",
		cell: ({ row }) => {
			return `${row.getValue("estimatedPeople")}`;
		}
	},
	{
		accessorKey: "material",
		header: "Material",
		cell: ({ row }) => {
			const material = row.getValue("material");
			return <Badge text={material ? "Yes" : "No"} size={'sm'} variant={material ? 'green' : 'red'}/>
		}
	},
	{
		accessorKey: "equipment",
		header: "Equipment",
		cell: ({ row }) => {
			const equip =  row.getValue("equipment");
			return <Badge text={equip ? "Yes" : "No"} size={'sm'} variant={equip ? 'green' : 'red'}/>

		}
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status =  String(row.getValue("status"));
			return <Badge text={enumToSentenceCase(status)} size={'sm'} variant={getVariationStatusBadgeVariant(status)}/>
		}
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const navigate = useNavigate();
			const JobsTableColumnActions: Action[] = [
				{
					label: "View / Edit ",
					icon: <EyeIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({to: '/variations/$variationId/edit', params:{variationId: row.original.id}})
					},
				},
			];
			return <ActionsDropMenu actions={JobsTableColumnActions} />;
		},
	},
];
