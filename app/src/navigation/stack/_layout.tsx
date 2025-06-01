import { Stack } from 'expo-router'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const LogoTitle = ({ props }) => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
            <Text style={styles.logoTitle}>
                React Native
            </Text>
        </View>
    )
}

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitle: (props) => <LogoTitle props={props} />,
                headerRight: () => <Button title='Click' />,
                animation: 'fade'
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Home"
                }}
            />
        </Stack>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        gap: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    logoTitle: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 30,
        width: 30
    }
})