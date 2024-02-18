import {SideBarPrimaryMenuItem} from "@/Components/Navigation/SideBar/SideBarPrimaryMenuItem";
import {sideBarMenuItems} from "@/Components/Navigation/Navigation";
import React from "react";
import {Separator} from "@/Primitives/Seperator";
import {LogOutIcon} from "lucide-react";
import Logo from "@/Assets/synex1.png";
import {OrganizationSwitcher, SignOutButton} from "@clerk/clerk-react";
import SubscriptionSettings from "@/Pages/SubscriptionSettings";

export default function SideBar() {
    return (
        <div className="flex bg-white shadow grow flex-col gap-y-5 overflow-y-auto px-6 pb-2">
            <div className="flex justify-center cursor-pointer space-x-4 pt-4">
                <a href={'/dashboard'}>
                    <img
                        className="h-16  mt-1"
                        src={Logo}
                        alt="Your Company"
                    />
                </a>
            </div>
            <OrganizationSwitcher/>
            <SubscriptionSettings/>
            <Separator/>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-6">
                            {sideBarMenuItems.map((item) => (
                                <SideBarPrimaryMenuItem key={item.label} item={item}/>
                            ))}
                        </ul>

                    </li>
                </ul>
                <ul className={'mb-4 -mx-2'}>
                    <SignOutButton>
                        <div className={'flex ml-2 space-x-3 text-sm leading-6 font-semibold'}>
                            <LogOutIcon size={24}/>
                            <SignOutButton>
                                Sign Out</SignOutButton>
                        </div>
                    </SignOutButton>
                </ul>
            </nav>
        </div>
    );
}
