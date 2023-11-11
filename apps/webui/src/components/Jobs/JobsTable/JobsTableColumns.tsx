import {ColumnDef} from "@tanstack/react-table";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase} from "@/Lib/utils";
import {ArrowUpDown, EditIcon, EyeIcon, NewspaperIcon, TrashIcon} from "lucide-react";
import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import moment from "moment";
import {useNavigate} from "@tanstack/react-router";

export interface JobsTableColumn {
	id: string;
	title: string;
	status: string;
	dueDate: string;
	customer: string;
	numVariations: number;
}

const getStatusBadgeVariant = (status: string) => {
	switch (status) {
		case "IN_PROGRESS":
			return "blue";
		case "COMPLETE":
			return "green";
		case "NOT_STARTED":
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

export const jobsTableColumns: ColumnDef<JobsTableColumn>[] = [
	{
		accessorKey: "title",
		header: "Name",
	},
	{
		accessorKey: "customer",
		header: "Customer",
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<button
					className={"flex items-center"}
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			return (
				<Badge
					size={"sm"}
					variant={getStatusBadgeVariant(row.getValue("status"))}
					text={enumToSentenceCase(row.getValue("status"))}
				/>
			);
		},
	},
	{
		accessorKey: "dueDate",
		header: "Due date",
		cell: ({ row }) => {
			return moment(row.getValue("dueDate")).isValid()
				? moment(row.getValue("dueDate")).toDate().toDateString()
				: "-";
		},
	},
	{
		accessorKey: "numVariations",
		header: "Variations",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const navigate = useNavigate();
			const JobsTableColumnActions: Action[] = [

				{
					label: "Variations",
					icon: <NewspaperIcon className={"h-4 text-primary/50"} />,
				},
				{
					label: "View Job",
					icon: <EyeIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({ to: "/jobs/$jobId", params: { jobId: row.original.id } });
					},
				},
				{
					label: "Edit Job",
					icon: <EditIcon className={"h-4 text-primary/50"} />,
					onClick: async () => {
						await navigate({ to: "/jobs/$jobId/edit", params: { jobId: row.original.id } });
					},
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
