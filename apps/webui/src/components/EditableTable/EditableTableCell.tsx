import {ChangeEvent, useEffect, useState} from "react";
import {Input} from "@/Primitives/Input";

// @ts-ignore
export default function EditableTableCell({getValue, row, column, table}) {
	const initialValue = getValue()
	const columnMeta = column.columnDef.meta
	const tableMeta = table.options.meta
	const [value, setValue] = useState(initialValue)
	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])
	const onBlur = () => {
		tableMeta?.updateData(row.index, column.id, value)
	}
	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value)
		tableMeta?.updateData(row.index, column.id, e.target.value)
	}

	if (tableMeta?.editedRows[row.id]) {
		return (
			<Input
				size={columnMeta?.size || 1}
				value={value}
				onChange={e => setValue(e.target.value)}
				onBlur={onBlur}
				type={column.columnDef.meta?.type || "text"}
			/>
		)
	}else if (columnMeta?.type === "dollars") {
		return <span>${value}</span>
	}else {
		return <span>{value}</span>
	}
}
