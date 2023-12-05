import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Primitives/Dialog";
import {cn} from "@/Lib/utils";
import {Button, buttonVariants} from "@/Primitives/Button/Button";
import {PlusIcon, TrashIcon} from "lucide-react";
import React from "react";
import LoadingButton from "@/Components/Loading/LoadingButton/LoadingButton";

interface DeleteItemDialogProps {
    triggerText: string;
    title?: string;
    description?: string;
    onConfirm: () => void;
    loadingStatus?: boolean;
}

export default function DeleteItemDialog({title, description, onConfirm, triggerText, loadingStatus = false}: DeleteItemDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({variant: "outline"}))}>
                <TrashIcon className={"h-4 w-4 shrink-0 text-destructive"}/>
            </DialogTrigger>
            <DialogContent className={'max-w-lg'}>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone, all data related to this item will be permanently deleted.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <LoadingButton label={"Confirm"} loadingStatus={loadingStatus} variant={'outline'}
                                   className={'text-destructive'} onClick={onConfirm}/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
