import StackedLabelAndValue from "@/Components/StackedLabelAndValue";
import {isValid, parseISO} from "date-fns";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getJobStatusBadgeVariant} from "@/Lib/utils";
import React from "react";

interface JobDetailsProps {
    title: string
    customerName: string
    dueDate: string
    status: string
    description: string
}

export default function JobDetails({title, customerName, dueDate, status, description}: JobDetailsProps) {
    return (
        <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <StackedLabelAndValue label={'Title'} value={title}/>
            </div>
            <div className="sm:col-span-3">
                <StackedLabelAndValue label={'Customer Name'} value={customerName}/>
            </div>
            <div className="sm:col-span-3">
                <StackedLabelAndValue label={'Due Date'} value={isValid(dueDate) ? parseISO(dueDate).toDateString() : '-'}/>
            </div>
            <div className="sm:col-span-3 ">
                <StackedLabelAndValue label={'Status'}
                                      value={
                                          <Badge text={status ? enumToSentenceCase(status) : '-'} size={"sm"}
                                                 variant={status ? getJobStatusBadgeVariant(status) : 'default'}/>
                                      }/>
            </div>
            <div className="sm:col-span-6 mb-6">
                <StackedLabelAndValue label={'Description'} value={description ? description : '-'}/>
            </div>
        </div>
    )
}
