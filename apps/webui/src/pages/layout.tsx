import React, { useState } from "react";
import SideBar from "@/Components/Navigation/SideBar/SideBar";
import StickyTopMobileSideBar from "@/Components/Navigation/StickyTopMobileSideBar/StickyTopMobileSideBar";
import SidebarDialog from "@/Components/Navigation/SidebarDialog/SidebarDialog";
import { Outlet } from "@tanstack/react-router";
import ScrollToTop from "@/Lib/src/ScrollToTop";

export default function AppLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

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
