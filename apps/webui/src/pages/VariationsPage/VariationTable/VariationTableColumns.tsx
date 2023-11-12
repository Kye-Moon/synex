import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, EditIcon, EyeIcon, NewspaperIcon, TrashIcon } from "lucide-react";
import ActionsDropMenu, { Action } from "@/Components/ActionsDropMenu/ActionsDropMenu";
import moment from "moment";
import { useNavigate } from "@tanstack/react-router";

export interface VariationTableColumn {
	id: string;
	jobId: string;
	jobName: string;
	description: string;
	title: string;
	submittedBy: string;
	createdAt: string;
	updatedAt: string;
	flag: string;
	estimatedCost: number;
	estimatedTime: number;
}

const getStatusBadgeVariant = (status: string) => {
	switch (status) {
		case "IN_PROGRESS":
			return "blue";
		case "DONE":
			return "green";
		case "OPEN":
			return "yellow";
	}
};

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
		accessorKey: "estimatedCost",
		header: "Est. cost",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const navigate = useNavigate();
			const JobsTableColumnActions: Action[] = [
				{
					label: "View",
					icon: <EyeIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({ to: "/variations/$variationId", params: { variationId: row.original.id } });
					},
				},
				{
					label: "Edit",
					icon: <EditIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({to: '/variations/$variationId/edit', params:{variationId: row.original.id}})
					}
				},
				{
					label: "Confirm",
					icon: <NewspaperIcon className={"h-4 text-primary/50"} />,
				},
				{
					label: "Archive",
					icon: <TrashIcon className={"h-4 text-destructive/50"} />,
				},
			];
			return <ActionsDropMenu actions={JobsTableColumnActions} />;
		},
	},
];
