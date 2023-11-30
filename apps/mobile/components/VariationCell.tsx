import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import ScreenSection from "./ScreenSection";
import {Box, Divider, HStack, Image, ScrollView, Text, View, VStack} from "@gluestack-ui/themed";
import ScreenContentSection from "./ScreenContentSection";
import LabelAndValue from "./LabelAndValue";
import {truncate} from "../lib/utils";
import React from "react";
import {StyleSheet} from "react-native";

const query = graphql(`
    query VariationCell($variationId: String!) {
        variation(id: $variationId) {
            id
            title
            description
        }
    }
`)
export default function VariationCell({variationId}: { variationId: string }) {
    const {data} = useSuspenseQuery(query, {variables: {variationId: variationId}})
    return (
        <ScreenSection>
            <ScrollView>
                <ScreenContentSection heading={"Details"}>
                    <View style={styles.details}>
                        <LabelAndValue label={'Job'} value={"Test job"}/>
                        <LabelAndValue label={'Customer'} value={"BSL"}/>
                        <LabelAndValue label={'Description'} value={"This is a demo description of a variation "}/>
                    </View>
                </ScreenContentSection>
                <ScreenContentSection heading={"Initial Information"}>
                    <View style={styles.container}>
                        <LabelAndValue label={'Est. hours'} value={"2"}/>
                        <LabelAndValue label={'Num people'} value={'3'}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Who?'} value={"This is a example note of who was apart of the work"}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Material'} value={"One can of paint"}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Equipment'} value={"Hire pressure washer"}/>
                    </View>
                </ScreenContentSection>
                <ScreenContentSection heading={"Images"}>
                    <View style={styles.imageContainer}>
                        <Image
                            size="md"
                            alt={'Image of the variation'}
                            borderRadius={8}
                            source={{
                                uri: 'https://picsum.photos/200/200',
                            }}
                        />
                        <Image
                            size="md"
                            alt={'Image of the variation'}
                            borderRadius={8}
                            source={{
                                uri: 'https://picsum.photos/200/200',
                            }}
                        />
                        <Image
                            size="md"
                            alt={'Image of the variation'}
                            borderRadius={8}
                            source={{
                                uri: 'https://picsum.photos/200/200',
                            }}
                        />
                    </View>
                </ScreenContentSection>
            </ScrollView>
        </ScreenSection>
    )
}
const styles = StyleSheet.create({
    details: {
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflow: 'hidden',
    },
    container: {
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        overflow: 'hidden',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
})
