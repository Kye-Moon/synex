import React from "react";
import {Label} from "@/Primitives/Label";
import {Input} from "@/Primitives/Input";

interface StackedLabelAndValueProps {
	label?: string
	value?: string
	onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function EditableLabelAndValue({label, value, onchange}: StackedLabelAndValueProps) {
	return (
		<div className={''}>
			<Label className={'text-primary/75'}>{label}</Label>
			<Input className={'w-3/4'} value={value} onChange={onchange}/>
		</div>
	)
}
