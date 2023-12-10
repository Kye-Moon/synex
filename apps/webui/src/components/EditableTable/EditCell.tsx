//@ts-ignore
import {
    CheckCircle,
    CheckSquare,
    CheckSquareIcon,
    Edit2Icon,
    PencilIcon,
    SaveIcon,
    TrashIcon,
    XIcon,
    XSquare,
    XSquareIcon
} from "lucide-react";

// @ts-ignore
export default function EditCell({row, table}) {
    const meta = table.options.meta
    //@ts-ignore
    const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
        const elName = e.currentTarget.name
        meta?.setEditedRows((old: []) => ({
            ...old,
            [row.id]: !old[row.id],
        }))
        if (elName !== "edit") {
            e.currentTarget.name === "cancel" ? meta?.revertData(row.index) : meta?.updateRow(row.index);
        }
    }
    const removeRow = () => {
        meta?.removeRow(row.index);
    };

    return (
        <div className="text-right">
            {meta?.editedRows[row.id] ? (
                <div className="edit-cell-action space-x-2 ">
                    <button onClick={setEditedRows} name="done">
                        <SaveIcon className="w-4 h-4 hover:text-accent"/>
                    </button>
                    <button onClick={setEditedRows} name="cancel">
                        <XIcon className="w-4 h-4"/>
                    </button>{" "}
                </div>
            ) : (
                <div className="edit-cell-action space-x-2">
                    <button onClick={setEditedRows} name="edit">
                        <PencilIcon className="w-4 h-4 hover:text-accent"/>
                    </button>
                    <button onClick={removeRow} name="remove">
                        <TrashIcon className="w-4 h-4 hover:text-destructive"/>
                    </button>
                </div>
            )}
        </div>
    );
}
