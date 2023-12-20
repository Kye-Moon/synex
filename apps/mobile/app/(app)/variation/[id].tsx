import React, {Suspense} from "react";
import {Text} from "@gluestack-ui/themed";
import {useLocalSearchParams} from "expo-router";
import Header from "../../../components/Header";
import VariationCell from "../../../components/VariationCell";

export default function Variation() {
    const {id, variationTitle} = useLocalSearchParams<{ id: string, variationTitle: string }>();
    return (
        <>
            <Header title={variationTitle}/>
            <Suspense fallback={<Text>Loading...</Text>}>
                <VariationCell variationId={id}/>
            </Suspense>
        </>
    )
}
