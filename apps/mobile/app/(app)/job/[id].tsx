import {useLocalSearchParams} from "expo-router";
import JobCell from "../../../components/JobCell/JobCell";
import React, {Suspense} from "react";
import {StyleSheet} from "react-native";
import Header from "../../../components/Header";
import LoadingSkeletonRows from "../../../components/Loading/SkeletonRows";

export default function Job() {
    const {id, jobTitle} = useLocalSearchParams<{ id: string, jobTitle: string }>();
    return (
        <>
            <Header title={"Job Details"}/>
            <Suspense fallback={<LoadingSkeletonRows rows={6}/>}>
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

