import {Tabs} from "expo-router";

export default function ApplicationLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="jobs"
                options={{
                    title: 'Jobs',
                }}
            />
            <Tabs.Screen
                name="variations"
                options={{
                    title: 'Variations',
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                }}
            />
        </Tabs>
    );
}
