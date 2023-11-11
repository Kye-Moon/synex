import PageHeadingWithMetaAndActions
	, {
	PageHeadingActionButtonProps
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import React, {Suspense} from "react";
import JobsTable from "@/Components/Jobs/JobsTable/JobsTable";
import NewJobDialog from "@/Components/Jobs/NewJobDialog/NewJobDialog";
import NewCrewMemberDialog from "@/Components/Crew/NewCrewMemberDialog";
import CrewTable from "@/Components/Crew/CrewTable/CrewTable";
import CrewPageTableSection from "@/Pages/CrewPage/CrewPageTableSection";

const crewPageActions: PageHeadingActionButtonProps[] = [
	{
		dialog: <NewCrewMemberDialog />,
	},
];
export default function CrewPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions actions={crewPageActions} pageHeading={"Crew"} />
			<PageContentSection>
				<Suspense fallback={<div>Loading...</div>}>
					<CrewPageTableSection />
				</Suspense>
			</PageContentSection>
		</>
	)
}
