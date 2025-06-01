import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />
            }} />
            <Tabs.Screen
                name="feed"
                options={{
                    title: "Feed",
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="rss-feed" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
                }}
            />
        </Tabs>
    )
}