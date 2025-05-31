import React from 'react'
import { Alert, Button, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TAlert() {
    const handleTwoButtonAlert = () => {
        Alert.alert(
            "Alert",
            "Two button alert",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel"),
                    style: "cancel"
                },
                {
                    text: "Okay",
                    onPress: () => console.log("Okay")
                },
            ]
        )
    }

    const handleThreeButtonAlert = () => {
        Alert.alert(
            "Alert",
            "Three button alert",
            [
                {
                    text: "Ask me Later",
                    onPress: () => console.log("Okay")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel"),
                    style: "cancel"
                },
                {
                    text: "Okay",
                    onPress: () => console.log("Okay")
                },
            ],
            {
                onDismiss() {
                    console.log("hello world")
                },
            }
        )
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.viewContainer}>
                <Button title='Two Button Alert' onPress={handleTwoButtonAlert} />
                <Button title='Three Button Alert' onPress={handleThreeButtonAlert} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer: {
        flexDirection: "column",
        gap: 8
    }
})