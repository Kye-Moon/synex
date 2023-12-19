import {Stack, useRouter} from "expo-router";
import {ArrowLeftIcon, Icon, Pressable} from "@gluestack-ui/themed";
import React from "react";

export default function NewVariationLayout() {
    const router = useRouter();
    return (
        <Stack
            screenOptions={{
                headerLeft: () => (
                    <Pressable onPress={()=> router.back()}>
                        <Icon as={ArrowLeftIcon} w="$6" h="$6" />
                    </Pressable>
                ),
            }}
        >
            <Stack.Screen name="VariationDetails" options={{title: "Variation Details", headerShown: true}}/>
            <Stack.Screen name="VariationResources"
                          options={{title: "Variation Resources", headerLeft: () => null, headerShown: true}}/>
        </Stack>
    );
}
