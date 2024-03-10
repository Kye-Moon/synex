import {useNavigate} from "@tanstack/react-router";
import {useEffect} from "react";
import {useOrganization, useUser} from "@clerk/clerk-react";
import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import useClient from "../hooks/useClient";
import {VarifyCard} from "@/Components/ProductCards/VarifyCard";
import {FieldLenzCard} from "@/Components/ProductCards/FieldLenzCard";
import {EstiQCard} from "@/Components/ProductCards/EstiQCard";

export default function DashboardPage() {
    const navigate = useNavigate();
    const {isSignedIn, user, isLoaded} = useUser();
    useEffect(() => {
        if (!isSignedIn && isLoaded) {
            navigate({to: "/"});
        }
    }, [isSignedIn, isLoaded]);

    return (
        <div>
            <PageHeadingWithMetaAndActions pageHeading={"Dashboard"}/>
            <PageContentSection>
                <h1 className={'text-lg font-semibold'}>Synex Products</h1>
                <div className=" flex flex-col items-center  lg:flex-row  lg:space-x-6">
                    <div className="w-full lg:w-auto py-2">
                        <VarifyCard/>
                    </div>
                </div>
            </PageContentSection>
            <PageContentSection>
                <h1 className="text-lg font-semibold">Coming Soon</h1>
                <div className="flex flex-col items-stretch md:flex-row md:items-stretch lg:space-x-6">
                    <div className="w-full lg:w-auto py-2">
                        <FieldLenzCard/>
                    </div>
                    <div className="w-full lg:w-auto py-2">
                        <EstiQCard/>
                    </div>
                </div>
            </PageContentSection>
        </div>
    )
}