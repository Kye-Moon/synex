import React, {Suspense} from 'react';
import {Box, Text, View} from "@gluestack-ui/themed";
import {StyleSheet} from "react-native";
import JobsCell from "../../../components/home/JobsCell/JobsCell";


export default function Jobs() {
    return (
        <View style={styles.container}>
            <Suspense fallback={<Text>Loading...</Text>}>
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
