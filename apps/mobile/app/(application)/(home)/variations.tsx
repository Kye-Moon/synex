import React, {Suspense} from 'react';
import {StyleSheet} from 'react-native';

import {AddIcon, Button, ButtonIcon, ButtonText, Text, View} from "@gluestack-ui/themed";
import {Link} from "expo-router";
import VariationsCell from "../../../components/home/VariationsCell/VariationsCell";

export default function VariationsScreen() {
    return (
        <View style={styles.container}>
            <View >
                <Suspense fallback={<Text>Loading...</Text>}>
                    <VariationsCell/>
                </Suspense>
            </View>
            <View style={styles.buttonContainer}>
                <Link asChild={true} href={{pathname: '/new-variation/VariationDetails'}}>
                    <Button
                        width={'90%'}
                        size="xl"
                    >
                        <ButtonText>New Variation </ButtonText>
                        <ButtonIcon as={AddIcon}/>
                    </Button>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 15,
    },
});
