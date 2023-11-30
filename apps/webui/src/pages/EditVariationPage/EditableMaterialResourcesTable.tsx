import {createColumnHelper} from "@tanstack/react-table";
import EditableTableCell from "@/Components/EditableTable/EditableTableCell";
import EditCell from "@/Components/EditableTable/EditCell";
import EditableTable from "@/Components/EditableTable/EditableTable";

type MaterialResource = {
	description: string;
	units: string;
	cpu: string;
};
const defaultData: MaterialResource[] = [
	{
		description: "Steel",
		units: "8",
		cpu: "50",
	},
	{
		description: "Steel",
		units: "8",
		cpu: "50",
	},
	{
		description: "Steel",
		units: "8",
		cpu: "50",
	},
];

const columnHelper = createColumnHelper<MaterialResource>();
const columns = [
	columnHelper.accessor("description", {
		header: "Description",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("units", {
		header: "Units",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("cpu", {
		header: "Cost per unit",
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

export default function EditableMaterialsResourcesTable() {
	return (
		<EditableTable columns={columns} data={defaultData}/>
	)
}
