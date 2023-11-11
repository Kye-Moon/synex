import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/Primitives/Dialog";
import { buttonVariants } from "@/Primitives/Button/Button";

import { cn } from "@/Lib/utils";
import { PlusIcon } from "lucide-react";
import NewJobForm from "@/Components/Jobs/NewJobDialog/NewJobForm/NewJobForm";
import React from "react";

export default function NewJobDialog() {
	const [open, setOpen] = React.useState(false);
	const onFormSubmitComplete = () => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className={cn(buttonVariants({ variant: "default", size: "default" }))}>
				<PlusIcon className={"mr-2 h-4 w-4 shrink-0"} />
				New Job
			</DialogTrigger>
			<DialogContent className={"max-w-6xl"}>
				<DialogHeader>
					<DialogTitle>New Job</DialogTitle>
				</DialogHeader>
				<NewJobForm onFormSubmitComplete={onFormSubmitComplete} />
			</DialogContent>
		</Dialog>
	);
}
