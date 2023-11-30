import {Button, ButtonIcon, Center, HStack, Box, Pressable, Text, View} from "@gluestack-ui/themed";
import {useLocalSearchParams} from "expo-router";
import JobCell from "../../../components/JobCell/JobCell";
import React, {Suspense} from "react";
import {StyleSheet} from "react-native";
import {ChevronLeftIcon, SkipBackIcon} from "lucide-react-native";
import Header from "../../../components/Header";

export default function Job() {
    const {id, jobTitle} = useLocalSearchParams<{ id: string, jobTitle: string }>();
    return (
        <>
            <Header title={jobTitle}/>
            <Suspense fallback={<Text>Loading...</Text>}>
                <JobCell jobId={id}/>
            </Suspense>
        </>

    )
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: "33.333%",
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottomWidth: 0.2,
        borderBottomColor: '#ccc',
        paddingBottom: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingBottom: 4,
    }
})

