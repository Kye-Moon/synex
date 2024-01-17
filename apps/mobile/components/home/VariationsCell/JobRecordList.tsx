import {FlatList} from "@gluestack-ui/themed";
import React from "react";
import {VariationsCellQuery} from "gql-types";
import JobRecordListItem from "./JobRecordListItem";

/**
 * @name JobRecordList Props
 */
interface JobRecordListProps {
    jobRecords: VariationsCellQuery['searchJobRecords']
}

/**
 * @name JobRecordList
 * @description a component that renders a list of variations
 * @constructor
 */
export default function JobRecordList({jobRecords}: JobRecordListProps) {
    return (
        <>
            <FlatList
                height={'85%'}
                marginHorizontal={'$4'}
                data={jobRecords}
                keyExtractor={(item: any) => item.id}
                renderItem={({item}: any) => (
                    <JobRecordListItem jobRecord={item}/>
                )}
            />

        </>
    )
}
