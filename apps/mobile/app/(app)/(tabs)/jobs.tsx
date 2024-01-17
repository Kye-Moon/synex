import {View} from "@gluestack-ui/themed";
import {StyleSheet} from "react-native";
import JobsCell from "../../..//components/home/JobsCell/JobsCell";
import React, {Suspense} from "react";
import LoadingSkeletonRows from "../../../components/Loading/SkeletonRows";


export default function Jobs() {
    return (
        <View style={styles.container}>
            <Suspense fallback={<LoadingSkeletonRows rows={6}/>}>
                <JobsCell/>
            </Suspense>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'space-between',
    },
});
