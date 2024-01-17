import {useSuspenseQuery} from "@apollo/client";
import {variationResourceSummary} from "@/Services/variationResourceService";
import {ViewSummary} from "@/Pages/JobRecordPage.tsx/Variation/ViewSummary";
import {Separator} from "@/Primitives/Seperator";
import {ViewCostsAndResources} from "@/Pages/JobRecordPage.tsx/Variation/ViewCostsAndResources";
import {ViewInitialData} from "@/Pages/JobRecordPage.tsx/Variation/ViewInitialData";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {MyDocument} from "@/Assets/pdfTemplate";
import useVariationResources from "@/Hooks/useVariationResources";
import {VariationQuery} from "gql-types";
import {Button} from "@/Primitives/Button/Button";


interface VariationJobRecordViewProps {
    jobRecord: VariationQuery['jobRecord']

}

export default function VariationJobRecordView({jobRecord}: VariationJobRecordViewProps) {
    const {data: summaryData} = useSuspenseQuery(variationResourceSummary, {variables: {variationId: jobRecord.id}})

    const {
        labourResources,
        equipmentResources,
        materialResources,
        otherResources
    } = useVariationResources({variationId: jobRecord.id});
    return (
        <div>
            <div className={' pb-4'}>
                <h3 className={'text-xl font-semibold'}>Initial Recorded Data</h3>
                <ViewInitialData variation={jobRecord}/>
            </div>
            <Separator/>
            <div className={'pt-6'}>
                <h3 className={'text-lg font-semibold'}>Costs and Resources Break Down</h3>
                <ViewCostsAndResources/>
            </div>
            <Separator/>
            <div className={'pt-4 pb-12'}>
                <h3 className={'text-xl font-semibold'}>Summary</h3>
                <ViewSummary variationId={jobRecord.id}/>
            </div>
            <div className={'flex justify-end mr-4'}>
                <PDFDownloadLink document={
                    <MyDocument
                        variation={jobRecord}
                        labourResources={labourResources}
                        equipmentResources={equipmentResources}
                        materialResources={materialResources}
                        otherResources={otherResources}
                        summaryData={summaryData.variationResourceSummary}
                    />
                } fileName="Demo-Variation.pdf">
                    <Button variant={'outline'}>
                        Export to PDF
                    </Button>
                </PDFDownloadLink>
            </div>
        </div>
    )
}
