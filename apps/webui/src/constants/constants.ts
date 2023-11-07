import { DropSelectOption } from "@/Components/DropSelect/DropSelect";

export enum JobStatus {
	NOT_STARTED = "NOT_STARTED",
	IN_PROGRESS = "IN_PROGRESS",
	FINISHED = "FINISHED",
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
];
