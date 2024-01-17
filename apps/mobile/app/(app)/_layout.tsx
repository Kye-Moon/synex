import {Redirect, Stack} from 'expo-router';
import {useRecoilValueLoadable} from "recoil";
import {accessTokenState} from "../../state/atoms";
import React from 'react';

export default function RootLayout() {
    const auth = useRecoilValueLoadable(accessTokenState); // TODO: This is just crude auth, we need to check if the token is valid
    if (!auth.getValue()) {
        return <Redirect href={'/sign-in'}/>
    }
    return <RootLayoutNav/>;
}


function RootLayoutNav() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="new-job-record" options={{headerShown:false}}/>
            <Stack.Screen name="job/[id]" options={{headerShown:false}}/>
            <Stack.Screen name="job-record/[id]" options={{headerShown:false}}/>
        </Stack>
    );
}