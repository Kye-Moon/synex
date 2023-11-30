import {Label} from "@/Primitives/Label";
import React from "react";

interface StackedLabelAndValueProps {
    label?: string
    value?: string | React.ReactNode
}
export default function StackedLabelAndValue({label,value}:StackedLabelAndValueProps){
    return (
        <div className={''}>
            <Label className={'text-primary/75'}>{label}</Label>
            <h3 className={''}>{value}</h3>
        </div>
    )
}
