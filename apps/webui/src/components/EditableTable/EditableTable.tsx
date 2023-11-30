import {useState} from "react";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Primitives/Table";

interface EditableTableProps<TData, TValue> {
	/**
	 * The column definition to render in the table
	 */
	columns: ColumnDef<TData, TValue>[];
	/**
	 * The data to render in the table (must match the column definition)
	 */
	data: TData[];

	/**
	 * The default data to render in the table (must match the column definition)
	 */
	defaultData?: TData[];
}


export default function EditableTable({
										  columns,
										  data,
										  defaultData
									  }: EditableTableProps<any, any>) {
	const [_data, setData] = useState(() => defaultData ? [...defaultData] : []);
	const [originalData, setOriginalData] = useState(() =>defaultData ? [...defaultData] : []);
	const [editedRows, setEditedRows] = useState({});
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			editedRows,
			setEditedRows,
			revertData: (rowIndex: number, revert: boolean) => {
				if (revert) {
					setData((old) =>
						old.map((row, index) =>
							index === rowIndex ? originalData[rowIndex] : row
						)
					);
				} else {
					setOriginalData((old) =>
						old.map((row, index) => (index === rowIndex ? data[rowIndex] : row))
					);
				}
			},
			updateData: (rowIndex: number, columnId: string, value: string) => {
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex],
								[columnId]: value,
							};
						}
						return row;
					})
				);
			},
		},
	});
	return (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<TableHead key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
							</TableHead>
						))}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows.map((row) => (
					<TableRow key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};


