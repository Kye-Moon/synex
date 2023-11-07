import { MoreVertical } from "lucide-react";
import React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/Primitives/DropDownMenu";
import { Button } from "@/Primitives/Button/Button";
import { Link } from "@tanstack/react-router";
import { infer } from "zod";

export interface Action {
	label: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

interface ActionsDropMenuProps {
	actions: Action[];
}

const ActionsDropMenu = ({ actions }: ActionsDropMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreVertical className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{actions.map((action) => (
					<DropdownMenuItem key={action.label} onClick={action.onClick || (() => {})}>
						{action.icon && <span className="mr-2">{action.icon}</span>}
						{action.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ActionsDropMenu;
