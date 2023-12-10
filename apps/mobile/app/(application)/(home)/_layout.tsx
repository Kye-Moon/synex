import {Tabs} from "expo-router";
import {ClipboardListIcon, KanbanIcon, SettingsIcon} from "lucide-react-native";
import React from "react";

export default function ApplicationLayout() {
    return (
        <Tabs
            initialRouteName="variations"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                },
            }}
        >
            <Tabs.Screen
                name="jobs"
                options={{
                    title: 'Jobs',
                    tabBarActiveTintColor: '#fff',
                    tabBarIcon: ({ color}) => (
                        <KanbanIcon color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="variations"
                options={{
                    title: 'Variations',
                    tabBarActiveTintColor: '#fff',
                    tabBarIcon: ({ color}) => (
                        <ClipboardListIcon color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarActiveTintColor: '#fff',
                    tabBarIcon: ({ color}) => (
                        <SettingsIcon color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
