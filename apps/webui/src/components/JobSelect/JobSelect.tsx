import ComboBox, { ComboBoxOption } from "@/Components/ComboBox/ComboBox";
import { useState } from "react";
import { Label } from "@/Primitives/Label";

/*
 * CustomerSelect Props
 */
interface JobSelectProps {
	/**
	 * Value of the ComboBox (the selected job)
	 */
	value: string;
	/**
	 * Function to set the value of the ComboBox (the selected job)
	 * @param value
	 */
	setValue: (value: string) => void;
}

export default function JobSelect({ value, setValue }: JobSelectProps) {
	const [open, setOpen] = useState(false);
	return (
		<div className={"flex flex-col space-y-1"}>
			<Label>Select Job</Label>
			<ComboBox open={open} setOpen={setOpen} value={value} setValue={setValue} options={jobs} />
		</div>
	);
}

const jobs: ComboBoxOption[] = [
	{
		value: "customer 1",
		label: "Customer 1",
	},
	{
		value: "customer 2",
		label: "Customer 2",
	},
	{
		value: "customer 3",
		label: "Customer 3",
	},
	{
		value: "customer 4",
		label: "Customer 4",
	},
];
