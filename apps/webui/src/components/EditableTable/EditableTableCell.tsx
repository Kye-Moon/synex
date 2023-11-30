import {ChangeEvent, useEffect, useState} from "react";

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
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				onBlur={onBlur}
				type={column.columnDef.meta?.type || "text"}
			/>
		)
	}
	return <span>{value}</span>
}
