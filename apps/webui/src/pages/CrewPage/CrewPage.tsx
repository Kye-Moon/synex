import PageHeadingWithMetaAndActions, {
	PageHeadingActionButtonProps
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import React, {Suspense} from "react";
import NewOrgMemberDialog from "@/Components/NewOrgMemberDialog/NewOrgMemberDialog";
import CrewTableSection from "@/Pages/CrewPage/CrewTableSection";
import TableWithHeaderLoadingSkeleton
	from "@/Components/Loading/Skeletons/TableWithHeaderLoadingSkeleton";

const crewPageActions: PageHeadingActionButtonProps[] = [
	{
		dialog: <NewOrgMemberDialog  triggerText={"New Member"} dialogTitle={"Add a new member"}/>,
	},
];
export default function CrewPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions actions={crewPageActions} pageHeading={"Supervisors / Crew"} />
			<PageContentSection>
				<Suspense fallback={<TableWithHeaderLoadingSkeleton gridCols={'grid-cols-3'} numberRows={9} />}>
					<CrewTableSection  showSelect={false} tableCaption={'Supervisors / Crew'}/>
				</Suspense>
			</PageContentSection>
		</>
	)
}
