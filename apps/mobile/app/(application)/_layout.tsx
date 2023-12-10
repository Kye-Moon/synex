import {Redirect, Stack} from 'expo-router';
import {useRecoilValue} from "recoil";
import {accessTokenState} from "../../state/atoms";
import React from 'react';

export default function AppLayout() {
    const auth = useRecoilValue(accessTokenState); // TODO: This is just crude auth, we need to check if the token is valid
    if (!auth) {
        return <Redirect href={'/sign-in'}/>
    }
    return (
        <Stack initialRouteName={'(home)'}>
            <Stack.Screen name="(home)" options={{headerShown:false}}/>
            <Stack.Screen name="new-variation" options={{headerShown:false}}/>
            <Stack.Screen name="job/[id]" options={{headerShown:false}}/>
            <Stack.Screen name="variation/[id]" options={{headerShown:false}}/>
        </Stack>
    );
}
