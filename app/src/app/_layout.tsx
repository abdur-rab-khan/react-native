import { Stack } from 'expo-router';
import React from 'react';

const isLoggedIn = true;

export default function RootLayout() {
    return <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(tabs)"
                options={{
                    headerShown: false
                }}
            />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(app)"
                options={{
                    title: "Log In",
                    headerShown: false
                }}
            />
        </Stack.Protected>
    </Stack>
}
