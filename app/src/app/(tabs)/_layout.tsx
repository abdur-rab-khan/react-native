import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name='feed'
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="feed" color={color} />,
                }}
            />
            <Tabs.Screen
                name='details'
                options={{
                    title: 'Details',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="details" color={color} />,
                }}
            />
            <Tabs.Screen
                name='no-name'
                options={{
                    title: 'Details',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="details" color={color} />,
                }}
            />
        </Tabs>
    )
}