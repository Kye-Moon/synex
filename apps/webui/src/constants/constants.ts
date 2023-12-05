import { DropSelectOption } from "@/Components/DropSelect/DropSelect";

export enum JobStatus {
	NOT_STARTED = "NOT_STARTED",
	IN_PROGRESS = "IN_PROGRESS",
	FINISHED = "FINISHED",
	ARCHIVED = "ARCHIVED",
}
export const JobStatusSelectOptions: DropSelectOption[] = [
	{
		label: "Not Started",
		value: JobStatus.NOT_STARTED,
	},
	{
		label: "In Progress",
		value: JobStatus.IN_PROGRESS,
	},
	{
		label: "Completed",
		value: JobStatus.FINISHED,
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
