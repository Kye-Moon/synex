import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown, EyeIcon} from "lucide-react";
import ActionsDropMenu, {Action} from "@/Components/ActionsDropMenu/ActionsDropMenu";
import moment from "moment";
import {useNavigate} from "@tanstack/react-router";
import Badge from "@/Primitives/Badge/Badge";
import {
	enumToSentenceCase,
	getJobRecordFlagBadgeVariant,
	getJobRecordStatusBadgeVariant,
	getJobRecordTypeBadgeVariant
} from "@/Lib/utils";

export interface JobScopeItemTableColumns {
	id: string;
	reference?: string | null;
	title?: string | null;
}

export const jobScopeItemColumns: ColumnDef<JobScopeItemTableColumns>[] = [
	{
		accessorKey: "reference",
		header: "Reference",
	},
	{
		accessorKey: "title",
		header: "Title",
	},
];

