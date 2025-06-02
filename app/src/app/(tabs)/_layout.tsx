import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "lightpink",
                },
                animation: "fade"
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    href: null, // If you want route to be exist but not show.
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name='feed'
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color, focused, size }) => <MaterialIcons size={28} name="feed" color={color}
                    />,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Georgia',
                        fontWeight: 300,
                    },
                    tabBarBadge: "88",
                }}
            />
            <Tabs.Screen
                name='details'
                options={{
                    title: 'Details',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="details" color={color} />,
                }}
            />
        </Tabs>
    )
}