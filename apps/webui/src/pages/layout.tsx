import React, {useEffect, useState} from "react";
import SideBar from "@/Components/Navigation/SideBar/SideBar";
import StickyTopMobileSideBar from "@/Components/Navigation/StickyTopMobileSideBar/StickyTopMobileSideBar";
import SidebarDialog from "@/Components/Navigation/SidebarDialog/SidebarDialog";
import {Outlet, useRouter} from "@tanstack/react-router";
import {userState} from "@/State/state";
import {useRecoilValue} from "recoil";

export default function AppLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const userInfo = useRecoilValue(userState);
	const router = useRouter();

	useEffect(() => {
		if (!userInfo) {
			router.navigate({to: "/login"});
		}
	}, [userInfo]);


	return (
		<>
			<StickyTopMobileSideBar setOpen={setSidebarOpen} />
			<SidebarDialog sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col w-60`}>
				<SideBar />
			</div>
			<main className={"lg:ml-60 flex-grow flex flex-col"}>
				<div className="p-10 flex flex-col min-h-screen bg-primary-foreground">
					<Outlet />
				</div>
			</main>
		</>
	);
}
