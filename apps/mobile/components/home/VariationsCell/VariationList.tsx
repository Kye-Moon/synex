import {FlatList} from "@gluestack-ui/themed";
import React from "react";
import {VariationsCellQuery} from "gql-types";
import VariationListItem from "./VariationListItem";
import PageEmptyState from "@codelytv/vite-react_best_practices-template/src/components/PageEmptyState/PageEmptyState";

/**
 * @name VariationList Props
 */
interface VariationListProps {
    variations: VariationsCellQuery['searchVariations']
}

/**
 * @name VariationList
 * @description a component that renders a list of variations
 * @constructor
 */
export default function VariationList({variations}: VariationListProps) {
    return (
        <>
            {variations.length === 0 ? (
                <PageEmptyState message={'No variations found'}/>
            ) : (
                <FlatList
                    height={'88%'}
                    marginHorizontal={'$4'}
                    data={variations}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({item}: any) => (
                        <VariationListItem variation={item}/>
                    )}
                />
            )
            }
        </>
    )
}
