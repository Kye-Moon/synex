import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
import React from 'react';
import {ClipboardListIcon, KanbanIcon, SettingsIcon} from "lucide-react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {

    return (
        <Tabs
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
                    tabBarIcon: ({color}) => (
                        <KanbanIcon color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
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
