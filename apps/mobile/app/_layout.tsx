import {Navigator, Stack} from "expo-router";
import {GluestackUIProvider, Spinner} from "@gluestack-ui/themed"
import {RecoilRoot} from "recoil";
import React, {Suspense} from "react";
import {ApolloWrapper} from "../context/ApolloWrapper";
import {config} from "../config/gluestack-ui.config";
import {StyleSheet} from 'react-native';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: '/(application)/(home)/variations',
};
export default function RootLayout() {
    return (
        <GluestackUIProvider config={config}>
            <RecoilRoot>
                <Suspense>

                    <AppWrapper/>
                </Suspense>
            </RecoilRoot>
        </GluestackUIProvider>
    )
}

const AppWrapper = () => {
    return (
        <ApolloWrapper>
            <Suspense>
                <Stack initialRouteName={'/(application)/(home)/variations'}>
                    <Stack.Screen name="sign-in" options={{headerShown: false, presentation: 'modal'}}/>
                    <Stack.Screen name="(application)" options={{headerShown: false}}/>
                </Stack>
                {/*<Spinner style={styles.spinner} color={'#fff'} size="large" />*/}
            </Suspense>
        </ApolloWrapper>
    )
}
const styles = StyleSheet.create({
    spinner: {
        position: 'absolute',
        width: '100%',
        zIndex: 1000,
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.5,
    }
});

