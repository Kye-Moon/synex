import {HomeIcon} from "lucide-react";

export interface NavigationItemProps {
    label: string;
    icon: any;
    route: string;
}

export const sideBarMenuItems: NavigationItemProps[] = [
    {label: "Dashboard", route: "/dashboard", icon: HomeIcon},
];

