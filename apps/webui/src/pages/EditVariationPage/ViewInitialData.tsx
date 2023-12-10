import {VariationQuery} from "../../../../../packages/gql-types";
import StackedLabelAndValue from "@/Components/StackedLabelAndValue";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getVariationStatusBadgeVariant} from "@/Lib/utils";
import React from "react";

interface ViewInitialDataProps {
    variation: VariationQuery['variation']
}
export function ViewInitialData({variation} : ViewInitialDataProps) {
    return (
        <div className={'grid grid-cols-3 space-y-2 '}>
            TODO
            {/*<div className={'col-span-1 space-y-2'}>*/}
            {/*    <StackedLabelAndValue label={'Title'} value={variation.title}/>*/}
            {/*</div>*/}
            {/*<div className={'col-span-1 space-y-2'}>*/}
            {/*    <StackedLabelAndValue label={'Customer'} value={variation.job.customerName}/>*/}
            {/*</div>*/}
            {/*<div className={'col-span-1 space-y-2'}>*/}
            {/*    <StackedLabelAndValue label={'Submitted By'} value={variation.submittedBy.name}/>*/}
            {/*</div>*/}
            {/*<div className={'col-span-3 space-y-2'}>*/}
            {/*    <StackedLabelAndValue label={'Status'} value={ <Badge text={enumToSentenceCase(variation.status)} size={'sm'} variant={getVariationStatusBadgeVariant(variation.status)}/>} />*/}
            {/*</div>*/}
            {/*<div className={'col-span-3 space-y-2'}>*/}
            {/*    <StackedLabelAndValue label={'Description'} value={variation.description}/>*/}
            {/*</div>*/}
        </div>
    )
}
