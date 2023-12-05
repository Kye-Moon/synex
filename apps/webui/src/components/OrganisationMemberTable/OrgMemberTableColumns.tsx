import {ColumnDef} from "@tanstack/react-table";
import {Checkbox} from "@/Primitives/Checkbox";

export interface CrewTableColumn {
	id: string;
	name: string;
}


export const orgMemberTableColumns: ColumnDef<CrewTableColumn>[] = [
	{
		id: "select",
		header: ({table}) => (
			<div className={' w-1/3'}>
				<Checkbox
					checked={table.getIsAllPageRowsSelected()}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			</div>

		),
		cell: ({row}) => (
			<div className={'ml-1  w-1/3'}>
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
	},
	{
		accessorKey: "name",
		header: "Name"
	},
]
