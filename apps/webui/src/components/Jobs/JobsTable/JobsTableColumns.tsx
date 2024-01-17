import {ColumnDef} from "@tanstack/react-table";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getJobStatusBadgeVariant} from "@/Lib/utils";
import {ArrowUpDown} from "lucide-react";
import JobsTableActionCell from "@/Components/Jobs/JobsTable/JobsTableActionCell";

export interface JobsTableColumn {
    id: string;
    title: string;
    status: string;
    customer: string;
    numVariations: number;
    qa: number;
    safety: number;
    notes: number;
}

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
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Job Status
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        },
        cell: ({row}) => {
            return (
                <Badge
                    size={"sm"}
                    variant={getJobStatusBadgeVariant(row.getValue("status"))}
                    text={row.getValue("status") ? enumToSentenceCase(row.getValue("status")) : '-'}
                />
            );
        },
    },
    {
        accessorKey: "qa",
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    # QA
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        }
    },
    {
        accessorKey: "notes",
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    # Notes
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        }
    },
    {
        accessorKey: "numVariations",
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    # Variations
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        }
    },
    {
        accessorKey: "safety",
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    # Safety
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        }
    },
    {
        id: "actions",
        cell: ({row}) => {
            return <JobsTableActionCell row={row}/>
        },
    },
];
