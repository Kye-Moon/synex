import {createColumnHelper} from "@tanstack/react-table";
import EditableTableCell from "@/Components/EditableTable/EditableTableCell";
import EditCell from "@/Components/EditableTable/EditCell";
import EditableTable from "@/Components/EditableTable/EditableTable";

type MiscResource = {
	description: string;
	cost: string;
};
const defaultData: MiscResource[] = [
	{
		description: "Labour",
		cost: "8",
	},
	{
		description: "Labour",
		cost: "8",
	},
	{
		description: "Labour",
		cost: "8",
	},
];

const columnHelper = createColumnHelper<MiscResource>();
const columns = [
	columnHelper.accessor("description", {
		header: "Description",
		cell: EditableTableCell,
		meta: {
			type: "text",
		},
	}),
	columnHelper.accessor("cost", {
		header: "Cost",
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

export default function EditableEquipmentResourcesTable() {
	return (
		<EditableTable columns={columns} data={defaultData}/>
	)
}
