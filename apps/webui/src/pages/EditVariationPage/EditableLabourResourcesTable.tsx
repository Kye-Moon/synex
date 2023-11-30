import {createColumnHelper} from "@tanstack/react-table";
import EditableTableCell from "@/Components/EditableTable/EditableTableCell";
import EditCell from "@/Components/EditableTable/EditCell";
import EditableTable from "@/Components/EditableTable/EditableTable";

type LabourResource = {
	description: string;
	hours: string;
	rate: string;
	people: string;
};
const defaultData: LabourResource[] = [
	{
		description: "Labour",
		hours: "8",
		rate: "50",
		people: "1",
	},
	{
		description: "Labour",
		hours: "8",
		rate: "50",
		people: "1",
	},
	{
		description: "Labour",
		hours: "8",
		rate: "50",
		people: "1",
	},
];

const columnHelper = createColumnHelper<LabourResource>();
const columns = [
	columnHelper.accessor("description", {
		header: "Description",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("hours", {
		header: "Hours",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("rate", {
		header: "Rate",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("people", {
		header: "# People",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.display({
		id: "edit",
		cell: EditCell,
	}),
];

export default function EditableLabourResourcesTable() {
	return (
		<EditableTable columns={columns} data={defaultData}/>
	)
}
