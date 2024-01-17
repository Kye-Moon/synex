import {StyleSheet} from "react-native";
import {Heading, View} from "@gluestack-ui/themed";
import React from "react";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import LabelAndValue from "./LabelAndValue";
import {enumToSentenceCase} from "../lib/utils";

const query = graphql(`
    query Settings {
        currentUser {
            name
            email
            role
            phone
            organisation {
                name
            }
        }
    }
`)

export default function AccountDetailsCell(){
    const {data} = useSuspenseQuery(query)


    return (
        <>
            <View style={styles.accountDetailsSection}>
                <Heading pb={'$4'}>Account Details</Heading>
                <View gap={'$2'}>
                    <LabelAndValue label={'Name'} value={data.currentUser.name}/>
                    <LabelAndValue label={'Email'} value={data.currentUser.email}/>
                    <LabelAndValue label={'Phone'} value={data.currentUser.phone}/>
                    <LabelAndValue label={'Organisation'} value={data.currentUser.organisation.name}/>
                    <LabelAndValue label={'Role'} value={enumToSentenceCase(data.currentUser?.role ?? '')}/>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 16,
        margin: 16,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    accountDetailsSection: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})