import React, {useEffect, useState} from "react";
import SideBar from "@/Components/Navigation/SideBar/SideBar";
import StickyTopMobileSideBar from "@/Components/Navigation/StickyTopMobileSideBar/StickyTopMobileSideBar";
import SidebarDialog from "@/Components/Navigation/SidebarDialog/SidebarDialog";
import {Outlet, useNavigate} from "@tanstack/react-router";
import {CreateOrganization, useAuth} from "@clerk/clerk-react";

export default function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {isSignedIn, isLoaded, orgId} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn && isLoaded) {
            navigate({to: "/"});
        }
    }, [isSignedIn, isLoaded]);

    return (
        <>
            <StickyTopMobileSideBar setOpen={setSidebarOpen}/>
            <SidebarDialog sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col w-60`}>
                <SideBar/>
            </div>
            <main className={"lg:ml-60 flex-grow flex flex-col"}>
                <div className="p-10 flex flex-col min-h-screen bg-primary-foreground">
                    {!orgId && isLoaded ? (
                        <div className={' pt-12 space-y-8 flex flex-col justify-center items-center'}>
                            <div className="text-center text-3xl font-bold text-primary-background">You need to create
                                or switch to an organisation to continue
                            </div>
                            <div className="text-center w-3/4 text-primary-background">
                                Your organisation is what you use to manage your subscriptions and billing. You can
                                create multiple organisations and switch between them.
                                You can also invite other people to join your organisation.
                                If you are a business, use your business name. If you are an individual, use your name.
                            </div>
                            <CreateOrganization/>
                        </div>
                    ) : (
                        <Outlet/>
                    )}
                </div>
            </main>
        </>
    );
}
