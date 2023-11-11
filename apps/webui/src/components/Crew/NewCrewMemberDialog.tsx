import React from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/Primitives/Dialog";
import {cn} from "@/Lib/utils";
import {buttonVariants} from "@/Primitives/Button/Button";
import {PlusIcon} from "lucide-react";
import NewJobForm from "@/Components/Jobs/NewJobDialog/NewJobForm/NewJobForm";
import NewCrewMemberForm from "@/Components/Crew/NewCrewMemberForm";

export default function NewCrewMemberDialog(){
	const [open, setOpen] = React.useState(false);
	const onFormSubmitComplete = () => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className={cn(buttonVariants({ variant: "default", size: "default" }))}>
				<PlusIcon className={"mr-2 h-4 w-4 shrink-0"} />
				Add crew member
			</DialogTrigger>
			<DialogContent className={"max-w-xl"}>
				<DialogHeader>
					<DialogTitle>Add new crew member</DialogTitle>
				</DialogHeader>
				<p className={'text-sm text-primary/50'}>If they do not have an account, they will receive a text to create one</p>
				<NewCrewMemberForm onFormSubmitComplete={onFormSubmitComplete} />
			</DialogContent>
		</Dialog>
	);
}
