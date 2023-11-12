import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import VariationTable from "@/Pages/VariationsPage/VariationTable/VariationTable";
import VariationActionTypeFilterTabs
    from "@/Pages/VariationsPage/VariationActionTypeFilterTabs/VariationActionTypeFilterTabs";
import JobSelect from "@/Components/JobSelect/JobSelect";
import {VariationTableColumn} from "@/Pages/VariationsPage/VariationTable/VariationTableColumns";

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
                <VariationTable variations={variationData} />
            </PageContentSection>
        </>
    );
}

export const variationData:VariationTableColumn[] = [
    {
        id: "1",
        jobId: "1",
        jobName: "Job 1",
        title: "Variation 1",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 100,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "2",
        jobId: "2",
        jobName: "Job 2",
        title: "Variation 2",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 100,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
    },
    {
        id: "3",
        jobId: "3",
        jobName: "Job 3",
        title: "Variation 3",
        description: "This is a variation",
        submittedBy: "John Smith",
        flag: "POTENTIAL",
        estimatedTime: 10,
        estimatedCost: 100,
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
