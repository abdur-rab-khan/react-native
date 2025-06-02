import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function index() {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.titleText}>
                Welcome Back
            </Text>
            <Button title='Log-in Now' />
        </View>
    )
}



const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 22,
    }
})