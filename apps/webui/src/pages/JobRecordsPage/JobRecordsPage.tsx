import PageHeadingWithMetaAndActions
	from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import JobRecordTable from "@/Pages/JobRecordsPage/JobRecordsTable/JobRecordTable";
import React, {Suspense} from "react";
import TableWithHeaderLoadingSkeleton
	from "@/Components/Loading/Skeletons/TableWithHeaderLoadingSkeleton";

export default function JobRecordsPage() {
    return (
        <>
            <PageHeadingWithMetaAndActions pageHeading={"Job Records"}/>
            <PageContentSection>
				<Suspense fallback={<TableWithHeaderLoadingSkeleton gridCols={'grid-cols-7'} numberRows={14} showSearch={true} />}>
					<JobRecordTable />
				</Suspense>
            </PageContentSection>
        </>
    );
}

