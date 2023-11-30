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
                <div className={"flex  space-x-8"}>
                    <div className={"py-5 "}>
                        <VariationActionTypeFilterTabs/>
                    </div>
                </div>
				<Suspense fallback={<div>Loading...</div>}>
					<VariationTable variations={variationData} />
				</Suspense>
            </PageContentSection>
        </>
    );
}

export const variationData:VariationTableColumn[] = [
    {
        id: "1",
        jobId: "1",
        jobName: "Equipment Calibration",
        title: "Temp Safety Barrier Installation",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 8,
        estimatedCost: 1500,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "2",
        jobId: "2",
        jobName: "Equipment Calibration",
        title: "Crane Delay",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 0.5,
        estimatedCost: 180,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "3",
        jobId: "3",
        jobName: "Quality Control Audit and Reporting",
        title: "Additional Documentation Revisions",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 1200,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
]

const variationResources = [
    {
        id: "1",
        variationId: "1",
        type: "MATERIAL",
        description: "This is a resource",
        quantity: 1,
        unit: "EA",
        unitPrice: 100,
        hours: null,
        rate: null,
        numPeople: null,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "2",
        variationId: "2",
        type: "MATERIAL",
        description: "This is a resource",
        quantity: 1,
        unit: "EA",
        unitPrice: 100,
        hours: null,
        rate: null,
        numPeople: null,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "3",
        variationId: "3",
        type: "MATERIAL",
        description: "This is a resource",
        quantity: 1,
        unit: "EA",
        unitPrice: 100,
        hours: null,
        rate: null,
        numPeople: null,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
]
