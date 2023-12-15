import PageHeadingWithMetaAndActions
	, {
	PageHeadingActionButtonProps
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import React, {Suspense} from "react";
import PageContentSection from "@/Components/PageContentSection";
import NewOrgMemberDialog from "@/Components/NewOrgMemberDialog/NewOrgMemberDialog";
import AdminPageTableSection from "@/Pages/AdminPage/AdminPageTableSection";

const crewPageActions: PageHeadingActionButtonProps[] = [
	{
		dialog: <NewOrgMemberDialog defaultRole={"ADMIN"} dialogTitle={"Add a new admin or owner"} triggerText={"New"} />,
	},
];
export default function AdminPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions actions={crewPageActions} pageHeading={"Admins / Owners"}/>
			<PageContentSection>
				<Suspense fallback={<div>Loading...</div>}>
					<AdminPageTableSection/>
				</Suspense>
			</PageContentSection>
		</>
	)
}
