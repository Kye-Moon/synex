import { DropSelectOption } from "@/Components/DropSelect/DropSelect";

export enum JobStatus {
	OPEN = "OPEN",
	CLOSED = "CLOSED",
	ARCHIVED = "ARCHIVED",
}
export const JobStatusSelectOptions: DropSelectOption[] = [
	{
		label: "Open",
		value: JobStatus.OPEN,
	},
	{
		label: "Closed",
		value: JobStatus.CLOSED,
	},
	{
		label: "Archived",
		value: JobStatus.ARCHIVED,
	},
];


export const roleSelectOptions: DropSelectOption[] = [
	{
		label: "Supervisor",
		value: "SUPERVISOR",
	},
	{
		label: "Crew member",
		value: "CREW_MEMBER",
	},
];
