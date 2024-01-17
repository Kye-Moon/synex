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
import React from "react";
import {StyleSheet} from "react-native";


interface ScopeItemSelectProps {
    onValueChange: (value: string) => void
    jobId?: string
}

export default function ScopeItemSelect({onValueChange, jobId}: ScopeItemSelectProps) {
    const data: any[] = []
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
                        {
                            data.map((job) => {
                                return (
                                    <SelectItem key={job.id} label={job.title} value={job.id}/>
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