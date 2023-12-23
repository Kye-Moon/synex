import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import ScreenSection from "./ScreenSection";
import {ScrollView, View} from "@gluestack-ui/themed";
import ScreenContentSection from "./ScreenContentSection";
import LabelAndValue from "./LabelAndValue";
import React from "react";
import {StyleSheet} from "react-native";
import {ImageGrid} from "./ImageGridPreview";

const query = graphql(`
    query VariationCell($variationId: String!) {
        variation(id: $variationId) {
            id
            title
            description
            job {
                title
                customerName
            }
            submittedBy {
                name
            }
            initialData {
                hours
                numPeople
                who
                materials
                equipment
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
            <ScrollView>
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
                        <LabelAndValue label={'Est. hours'} value={data.variation.initialData?.hours}/>
                        <LabelAndValue label={'Num people'} value={data.variation.initialData?.numPeople}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Who?'} value={data.variation.initialData?.who}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Material'} value={data.variation.initialData?.materials}/>
                    </View>
                    <View style={styles.container}>
                        <LabelAndValue label={'Equipment'} value={data.variation.initialData?.equipment}/>
                    </View>
                </ScreenContentSection>
                <ScreenContentSection heading={"Images"}>
                    <ImageGrid images={data.variation.images} size={4}/>
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
