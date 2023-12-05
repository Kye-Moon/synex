import {CircleStackIcon, HomeIcon} from "@heroicons/react/24/outline";

export interface NavigationItemProps {
	label: string;
	icon: any;
	route: string;
}

export const sideBarMenuItems: NavigationItemProps[] = [
	{ label: "Dashboard", route: "/dashboard", icon: HomeIcon },
	{ label: "Jobs", route: "/jobs", icon: CircleStackIcon },
	{ label: "Variations", route: "/variations", icon: CircleStackIcon },
	{ label: "Supervisors / Crew", route: "/crew", icon: CircleStackIcon },
];

export const adminMenuItems: NavigationItemProps[] = [
	{label: "Admins", route: '/admins', icon: CircleStackIcon}
]
