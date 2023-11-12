import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import StackedLabelAndValue from "@/Components/StackedLabelAndValue";

export default function EditVariationPage(){
    return (
        <>
            <PageHeadingWithMetaAndActions pageHeading={"Edit"}/>
            <PageContentSection>
                <div className={'grid grid-cols-1 xl:grid-cols-2'}>
                    <div className={'col-span-1 bg-red-200'}>
                        <div className={'grid grid-cols-2 bg-green-100'}>
                            <div className={'col-span-2'}>
                                <StackedLabelAndValue label={'Title'} value={variation.title}/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-1 bg-blue-200'}>
                        Details
                    </div>
                </div>
            </PageContentSection>
        </>
    )
}


const variation = {
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
}

const resources = [
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
        id: "1",
        variationId: "1",
        type: "LABOUR",
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
]
