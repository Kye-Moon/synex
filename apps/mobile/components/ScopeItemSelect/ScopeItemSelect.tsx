import {
    ScrollView,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectInput,
    SelectItem,
    SelectPortal,
    SelectTrigger
} from "@gluestack-ui/themed";
import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {graphql} from "gql-types";
import {useLazyQuery, useQuery} from "@apollo/client";


interface ScopeItemSelectProps {
    onValueChange: (value: string) => void
    jobId?: string
}

const query = graphql(`
    query GetScopeItems($jobId: String!) {
        jobScopeItems(jobId: $jobId) {
            id
            title
            reference
            description
        }
    }
`)

export default function ScopeItemSelect({onValueChange, jobId}: ScopeItemSelectProps) {
    const [getScopeItems, {loading, data}] = useLazyQuery(query)
    //Filter to include on the ones with a title
    const filteredScopeItems = data?.jobScopeItems?.filter((item) => item.title) || []

    //Get the scope items when the jobId changes
    useEffect(() => {
        async function _getScopeItems() {
            if (jobId !== undefined) {
                await getScopeItems({variables: {jobId: jobId}})
            }
        }

        _getScopeItems()

    }, [jobId]);
    return (
        <Select isRequired onValueChange={onValueChange}>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder={jobId ? "Select a scope item" : "Select a job first"}/>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop/>
                <SelectContent style={styles.container}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator/>
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Select a scope reference" value="" isDisabled={!jobId}/>
                    <ScrollView width={'100%'}>
                        {filteredScopeItems.map((item) => {
                            return (
                                <SelectItem
                                    key={item.id}
                                    label={`[${item.reference}] - ${item.title}`}
                                    value={item.id}
                                />
                            )
                        })
                        }
                    </ScrollView>
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },

});