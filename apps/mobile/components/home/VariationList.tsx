import {Box, Divider, FlatList, Heading, Text, VStack} from "@gluestack-ui/themed";
import React from "react";
import {VariationsCellQuery} from "gql-types";
import VariationListItem from "./VariationListItem";

/**
 * @name VariationList Props
 */
interface VariationListProps {
    variations: VariationsCellQuery['variations']
}

/**
 * @name VariationList
 * @description a component that renders a list of variations
 * @constructor
 */
export default function VariationList({variations}: VariationListProps){
    return (
        <>
         <FlatList
                height={'90%'}
                data={variations}
                keyExtractor={(item: any) => item.id}
                renderItem={({item}: any) => (
                        <VariationListItem variation={item}/>
                )}
            />
        </>
    )
}
