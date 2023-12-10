import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import ScreenSection from "./ScreenSection";
import {Image, ScrollView, View} from "@gluestack-ui/themed";
import ScreenContentSection from "./ScreenContentSection";
import LabelAndValue from "./LabelAndValue";
import React from "react";
import {StyleSheet} from "react-native";

const query = graphql(`
    query VariationCell($variationId: String!) {
        variation(id: $variationId) {
            id
            title
            description
            job {
                customerName
            }
            submittedBy {
                name
            }
            images {
                id
                url
            }
        }
    }
`)
export default function VariationCell({variationId}: { variationId: string }) {
    const {data} = useSuspenseQuery(query, {variables: {variationId: variationId}})
    return (
        <ScreenSection>
            <ScrollView >
                <ScreenContentSection heading={"Details"}>
                    <View style={styles.details}>
                        <LabelAndValue label={'Job'} value={data.variation.title}/>
                        <LabelAndValue label={'Customer'} value={data.variation.job.customerName}/>
                        <LabelAndValue label={'Submitted by'} value={data.variation.submittedBy.name}/>
                        <LabelAndValue label={'Description'} value={data.variation.description}/>
                    </View>
                </ScreenContentSection>
                <ScreenContentSection heading={"Initial Information"}>
                    <View style={styles.container}>
                        <LabelAndValue label={'Est. hours'} value={"TODO"}/>
                        <LabelAndValue label={'Num people'} value={'TODO'}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Who?'} value={"TODO"}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Material'} value={"TODO"}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Equipment'} value={"TODO"}/>
                    </View>
                </ScreenContentSection>
                <ScreenContentSection heading={"Images"}>
                    <View style={styles.imageContainer}>
                        {data.variation.images.map((image: any) => {
                            return (
                                <Image
                                    size="lg"
                                    alt={'Image of the variation'}
                                    borderRadius={8}
                                    source={{
                                        uri: image.url,
                                    }}
                                />
                            )
                        })}
                    </View>
                </ScreenContentSection>
                <View padding={'$10'}></View>
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
        paddingVertical: 8,
    },
})
