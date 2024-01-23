import React from 'react';
import {View} from "@gluestack-ui/themed";
import {Skeleton} from 'moti/skeleton';
import {StyleSheet} from "react-native";

interface LoadingSkeletonRowsProps {
    rows?: number
    height?: number
}

export default function LoadingSkeletonRows({rows = 4, height}: LoadingSkeletonRowsProps) {

    return (
        <View style={styles.skeletonContainer}>
            {
                Array.from(Array(rows)).map((_, index) => (
                    <Skeleton key={index} colorMode={'light'} radius={6} height={65} width={'100%'}/>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    skeletonContainer: {
        flex: 1,
        height: '100%',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },
    skeletonRow: {
        width: '100%',
        marginHorizontal: 20,
        height: 60,
        backgroundColor: "#adadad",
        borderRadius: 10,
    }
});