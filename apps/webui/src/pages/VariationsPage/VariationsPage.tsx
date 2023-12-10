import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import VariationTable from "@/Pages/VariationsPage/VariationTable/VariationTable";
import VariationActionTypeFilterTabs
    from "@/Pages/VariationsPage/VariationActionTypeFilterTabs/VariationActionTypeFilterTabs";
import {VariationTableColumn} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";
import React, {Suspense} from "react";

export default function VariationsPage() {
    return (
        <>
            <PageHeadingWithMetaAndActions pageHeading={"Variations"}/>
            <PageContentSection>
				<Suspense fallback={<div>Loading...</div>}>
					<VariationTable />
				</Suspense>
            </PageContentSection>
        </>
    );
}

