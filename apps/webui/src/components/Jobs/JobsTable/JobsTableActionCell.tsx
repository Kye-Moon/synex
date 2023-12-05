import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import {useNavigate} from "@tanstack/react-router";
import {EditIcon, EyeIcon, FolderIcon, TrashIcon} from "lucide-react";
import {JobsTableColumn} from "@/Components/Jobs/JobsTable/JobsTableColumns";
import {Row} from "@tanstack/react-table";

interface JobsTableActionCellProps {
    row: Row<JobsTableColumn>
}
export default function JobsTableActionCell({row}: JobsTableActionCellProps) {
    const navigate = useNavigate();

    const JobsTableColumnActions: Action[] = [
        {
            label: "View",
            icon: <EyeIcon className={"h-4 text-primary/50"} />,
            onClick: async () => {
                await navigate({ to: "/jobs/$jobId", params: { jobId: row.original.id } });
            },
        },
        {
            label: "Edit",
            icon: <EditIcon className={"h-4 text-primary/50"} />,
            onClick: async () => {
                await navigate({ to: "/jobs/$jobId/edit", params: { jobId: row.original.id } });
            },
        },
    ];
    return <ActionsDropMenu actions={JobsTableColumnActions} />;
}
