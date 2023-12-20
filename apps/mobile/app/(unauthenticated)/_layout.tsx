import {Redirect, Stack} from 'expo-router';
import {useRecoilValueLoadable} from "recoil";
import {accessTokenState} from "../../state/atoms";
import React from 'react';

export default function RootLayout() {
    const auth = useRecoilValueLoadable(accessTokenState); // TODO: This is just crude auth, we need to check if the token is valid
    if (auth.getValue()) {
        return <Redirect href={'/(app)/(tabs)'}/>
    }
    return <RootLayoutNav/>;
}


function RootLayoutNav() {
    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{headerShown: false}}/>
            <Stack.Screen name="reset-password" options={{headerShown: true, headerTitle: "Reset Password"}}/>
            {/*<Stack.Screen name="new-variation" options={{headerShown:false}}/>*/}
            {/*<Stack.Screen name="job/[id]" options={{headerShown:false}}/>*/}
            {/*<Stack.Screen name="variation/[id]" options={{headerShown:false}}/>*/}
        </Stack>
    );
}