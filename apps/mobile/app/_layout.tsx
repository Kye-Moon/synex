import {Stack} from "expo-router";
import {config} from "@gluestack-ui/config";
import {GluestackUIProvider} from "@gluestack-ui/themed"
import {RecoilRoot} from "recoil";
import {Suspense} from "react";
import {ApolloWrapper} from "../context/ApolloWrapper";

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
                    <ApolloWrapper>
                        <Stack initialRouteName={'/(application)/(home)/variations'}>
                            <Stack.Screen name="sign-in" options={{headerShown: false, presentation: 'modal'}}/>
                            <Stack.Screen name="(application)" options={{headerShown: false}}/>
                        </Stack>
                    </ApolloWrapper>
                </Suspense>
            </RecoilRoot>
        </GluestackUIProvider>
    )
}
