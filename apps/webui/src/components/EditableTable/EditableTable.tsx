import {useState} from "react";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/Primitives/Table";
import {PlusIcon} from "lucide-react";
import {Button} from "@/Primitives/Button/Button";
import {CreateVariationResourceInput, UpdateVariationResourceInput} from "../../../../../packages/gql-types";

interface EditableTableProps<TData, TValue> {
    /**
     * The column definition to render in the table
     */
    columns: ColumnDef<TData, TValue>[];
    /**
     * The data to render in the table (must match the column definition)
     */
    data: TData[];

    setData: (data: (old: any) => any) => void;


    /**
     * The default data to render in the table (must match the column definition)
     */
    originalData: TData[];

    setOriginalData: (data: (old: any) => any) => void;
    updateRow: (id: string, data: UpdateVariationResourceInput) => void;
    addRow: (newRow: Omit<CreateVariationResourceInput, 'variationId'>) => void;
    resourceType: string;
    deleteRow: (id: string) => void;
}


export default function EditableTable({
                                          columns,
                                          data,
                                          setData,
                                          setOriginalData,
                                          originalData,
                                          updateRow,
                                          addRow,
                                          deleteRow,
                                          resourceType
                                      }: EditableTableProps<any, any>) {

    const [editedRows, setEditedRows] = useState({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            editedRows,
            setEditedRows,
            revertData: (rowIndex: number) => {
                setData((old) =>
                    old.map((row: any, index: number) =>
                        index === rowIndex ? originalData[rowIndex] : row
                    )
                );
            },
            updateRow: (rowIndex: number) => {
                updateRow(data[rowIndex].id, data[rowIndex]);
            },
            updateData: (rowIndex: number, columnId: string, value: string) => {
                setData((old) =>
                    old.map((row: any, index: number) => {
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
            addRow: () => {
                const newRow: any = {
                    type: resourceType,
                };
                addRow(newRow);
            },
            removeRow: (rowIndex: number) => {
                deleteRow(data[rowIndex].id);
            },
        },
    });

    return (
        <>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            <TableHead key={headerGroup.id}>
                                #
                            </TableHead>
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
                            <TableCell key={row.id}>
                                {row.index + 1}
                            </TableCell>
                            {row.getVisibleCells().map((cell) => (
                                <>
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                </>

                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={'flex w-full justify-end my-2 bg-primary-foreground p-1'}>
                {/*@ts-ignore*/}
                <Button variant={'outline'} size={'sm'} onClick={table.options.meta?.addRow}>
                    <PlusIcon className={'mr-2'} size={'20'}/>
                    {'Row'}
                </Button>
            </div>
        </>

    );
};
