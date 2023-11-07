import * as React from "react";

import { NavigationItemProps } from "../Navigation";
import { cva } from "class-variance-authority";
import { Link } from "@tanstack/react-router";

interface SideBarPrimaryMenuItemProps {
	item: NavigationItemProps;
	showText?: boolean;
}

const linkVariants = cva(
	"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:text-accent  transition-colors",
	{
		variants: {
			variant: {
				default: "",
				active: "text-accent bg-primary/10",
			},
		},
	}
);

export const SideBarPrimaryMenuItem = ({ item, showText = true }: SideBarPrimaryMenuItemProps) => {
	return (
		<li key={item.label}>
			{/*@ts-ignore*/}
			<Link
				activeProps={{
					className: linkVariants({ variant: "active" }),
				}}
				inactiveProps={{
					className: linkVariants({ variant: "default" }),
				}}
				to={item.route}
			>
				<item.icon className={"h-6 w-6 shrink-0 group-hover:text-accent"} aria-hidden="true" />
				{showText && item.label}
			</Link>
		</li>
	);
};
