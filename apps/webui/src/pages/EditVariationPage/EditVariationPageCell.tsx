import {ViewDetails} from "@/Pages/EditVariationPage/ViewDetails";
import {ViewSummary} from "@/Pages/EditVariationPage/ViewSummary";
import {Separator} from "@/Primitives/Seperator";
import {ViewCostsAndResources} from "@/Pages/EditVariationPage/ViewCostsAndResources";
import React from "react";
import {useSuspenseQuery} from "@apollo/client";
import {variationQuery} from "@/Services/variationService";
import {ViewInitialData} from "@/Pages/EditVariationPage/ViewInitialData";

interface EditVariationPageCellProps {
    variationId: string;
}
export default function EditVariationPageCell({variationId}: EditVariationPageCellProps){
    const {data} = useSuspenseQuery(variationQuery, {variables: {id: variationId}})


    return (
        <div className={'grid grid-cols-1 xl:grid-cols-3 space-x-4'}>
            <div className={'col-span-2 border-r-2 '}>
                <div className={' pb-4'}>
                    <h3 className={'text-xl font-semibold'}>Details</h3>
                    <ViewDetails variation={data.variation}/>
                </div>
                <div className={' pb-4'}>
                    <h3 className={'text-xl font-semibold'}>Initial Recorded data</h3>
                    <ViewInitialData variation={data.variation}/>
                </div>
                <Separator/>
                <div className={'pt-6'}>
                    <h3 className={'text-lg font-semibold'}>Costs and Resources Break Down</h3>
                    <ViewCostsAndResources />
                </div>
                <Separator/>
                <div className={'pt-4 pb-12'}>
                    <h3 className={'text-xl font-semibold'}>Summary</h3>
                    <ViewSummary variationId={variationId}/>
                </div>
            </div>
            <div className={'col-span-1'}>
                <h3 className={'text-lg font-semibold'}>Images</h3>
                <div className={'py-2 space-y-2 flex flex-col align-middle'}>
                    {data.variation.images.map((image) => {
                        return <img key={image.id} className={'rounded'} src={image.url} alt={''}/>
                    })}
                </div>
            </div>
        </div>
    )
}
const variation = {
    id: "1",
    jobId: "1",
    jobName: "Job 1",
    title: "Variation 1",
    customer: "Customer 1",
    description: "This is a variation",
    submittedBy: "John Smith",
    flag: "POTENTIAL",
    estimatedTime: 10,
    estimatedCost: 100,
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
}
