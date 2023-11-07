import ActionsDropMenu, { Action } from "@/Components/ActionsDropMenu/ActionsDropMenu";

const defaultActions: Action[] = [{ label: "View" }];

interface JobActionsCellProps {
	actions?: Action[];
	jobID: string;
}
export default function JobActionsCell({ actions, jobID }: JobActionsCellProps) {
	return (
		<>
			<ActionsDropMenu actions={actions ? actions : defaultActions} />
		</>
	);
}
