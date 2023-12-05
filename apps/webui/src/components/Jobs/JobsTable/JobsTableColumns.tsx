import {ColumnDef} from "@tanstack/react-table";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase} from "@/Lib/utils";
import {ArrowUpDown} from "lucide-react";
import JobsTableActionCell from "@/Components/Jobs/JobsTable/JobsTableActionCell";

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
        header: ({column}) => {
            return (
                <button
                    className={"flex items-center"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </button>
            );
        },
        cell: ({row}) => {
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
        accessorKey: "numVariations",
        header: "Variations",
    },
    {
        id: "actions",
        cell: ({row}) => {
            return <JobsTableActionCell row={row}/>
        },
    },
];
