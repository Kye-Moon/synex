import React, { Suspense } from "react";
import PageHeadingWithMetaAndActions, {
	PageHeadingActionButtonProps,
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import NewJobDialog from "@/Components/Jobs/NewJobDialog/NewJobDialog";
import PageContentSection from "@/Components/PageContentSection";
import JobsTable from "@/Components/Jobs/JobsTable/JobsTable";

const jobPageActions: PageHeadingActionButtonProps[] = [
	{
		dialog: <NewJobDialog />,
	},
];

export default function JobsPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions actions={jobPageActions} pageHeading={"Jobs"} />
			<PageContentSection>
				<Suspense fallback={<div>Loading...</div>}>
					<JobsTable />
				</Suspense>
			</PageContentSection>
		</>
	);
}
