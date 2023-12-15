import {SplashScreen, Stack} from "expo-router";
import {GluestackUIProvider, View} from "@gluestack-ui/themed"
import {RecoilRoot} from "recoil";
import React, {Suspense, useEffect} from "react";
import {ApolloWrapper} from "../context/ApolloWrapper";
import {config} from "../config/gluestack-ui.config";
import {StyleSheet} from 'react-native';
import {loadDevMessages, loadErrorMessages} from "@apollo/client/dev";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';


if (__DEV__) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
}
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return (
        <GluestackUIProvider config={config}>
            <RecoilRoot>
                <Suspense>
                    <View style={{flex: 1}}>
                        <AppWrapper/>
                    </View>

                </Suspense>
            </RecoilRoot>
        </GluestackUIProvider>
    )
}

const AppWrapper = () => {
    console.log("AppWrapper");
    return (
        <ApolloWrapper>
            <Stack initialRouteName='(application)'>
                <Stack.Screen name="(application)" options={{headerShown: false}}/>
                <Stack.Screen name="sign-in" options={{headerShown: false}}/>
            </Stack>
        </ApolloWrapper>
    )
}

