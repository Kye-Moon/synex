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

const JOB_RECORD_TYPES = [
    {value: "NOTE", label: "Job Note"},
    {value: "VARIATION", label: "Variation"},
    {value: "QA", label: "QA"},
    {value: "SAFETY", label: "Safety"},
]

interface ScopeItemSelectProps {
    onValueChange: (value: string) => void
    jobId?: string
}

export default function JobRecordTypeSelect({onValueChange, jobId}: ScopeItemSelectProps) {
    return (
        <Select isRequired onValueChange={onValueChange}>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder={"Eg. QA Note"}/>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop/>
                <SelectContent style={styles.container}>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator/>
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Choose a record type" value={""} isDisabled={false}/>
                    <ScrollView width={'100%'}>
                        {
                            JOB_RECORD_TYPES.map((job) => {
                                return (
                                    <SelectItem key={job.value} label={job.label} value={job.value}/>
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