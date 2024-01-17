import React, {Suspense} from "react";
import PageHeadingWithMetaAndActions, {
	PageHeadingActionButtonProps,
} from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import NewJobDialog from "@/Components/Jobs/NewJobDialog/NewJobDialog";
import PageContentSection from "@/Components/PageContentSection";
import JobsTable from "@/Components/Jobs/JobsTable/JobsTable";
import TableWithHeaderLoadingSkeleton
	from "@/Components/Loading/Skeletons/TableWithHeaderLoadingSkeleton";

const jobsPageActions: PageHeadingActionButtonProps[] = [
	{
		dialog: <NewJobDialog />,
	},
];

export default function JobsPage() {
	return (
		<>
			<PageHeadingWithMetaAndActions actions={jobsPageActions} pageHeading={"Jobs"} />
			<PageContentSection>
				<Suspense fallback={<TableWithHeaderLoadingSkeleton gridCols={'grid-cols-7'} numberRows={14} showSearch={true} />}>
					<JobsTable />
				</Suspense>
			</PageContentSection>
		</>
	);
}
