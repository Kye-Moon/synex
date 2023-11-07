import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, EditIcon, EyeIcon, NewspaperIcon, TrashIcon } from "lucide-react";
import ActionsDropMenu, { Action } from "@/Components/ActionsDropMenu/ActionsDropMenu";
import moment from "moment";
import { useNavigate } from "@tanstack/react-router";

export interface VariationTableColumn {
	id: string;
	title: string;
	submittedBy: string;
	dateSubmitted: Date;
	estHours: number;
	estCost: number;
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
		accessorKey: "submittedBy",
		header: "Submitted by",
	},
	{
		accessorKey: "dateSubmitted",
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
			return moment(row.getValue("dueDate")).isValid()
				? moment(row.getValue("dueDate")).toDate().toDateString()
				: "-";
		},
	},
	{
		accessorKey: "estHours",
		header: "Est. hours",
	},
	{
		accessorKey: "estCost",
		header: "Est. cost",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const navigate = useNavigate();
			const JobsTableColumnActions: Action[] = [
				{
					label: "View Job",
					icon: <EyeIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({ to: "/jobs/$jobId", params: { jobId: row.original.id } });
					},
				},
				{
					label: "Variations",
					icon: <NewspaperIcon className={"h-4 text-primary/50"} />,
				},
				{
					label: "Edit",
					icon: <EditIcon className={"h-4 text-primary/50"} />,
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
