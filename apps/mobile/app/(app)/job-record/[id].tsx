import React, {Suspense} from "react";
import {Text} from "@gluestack-ui/themed";
import {useLocalSearchParams} from "expo-router";
import Header from "../../../components/Header";
import VariationCell from "../../../components/VariationCell";

export default function Variation() {
    const {id, jobRecordTitle} = useLocalSearchParams<{ id: string, jobRecordTitle: string }>();
    return (
        <>
            <Header title={jobRecordTitle}/>
            <Suspense fallback={<Text>Loading...</Text>}>
                <VariationCell variationId={id}/>
            </Suspense>
        </>
    )
}
