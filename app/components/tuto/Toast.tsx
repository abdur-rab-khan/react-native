import React from 'react'
import { Button, StyleSheet, ToastAndroid } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TToast() {
    const handleSimpleToast = () => {
        ToastAndroid.show("Simple Toast", 0.5)
    }

    const handleToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Toast With Gravity",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
        )
    }

    const handleToastWithGravityOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Toggling Toast with Gravity and Offset",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            200
        )
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.containerView}>
                <Button title='Toggle Simple Toast' onPress={handleSimpleToast} />
                <Button title='Toggle With Gravity' onPress={handleToastWithGravity} />
                <Button title='Toggle With Gravity and offset' onPress={handleToastWithGravityOffset} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    containerView: {
        gap: 8
    }
})