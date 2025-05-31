import React, { useState } from 'react';
import { Alert, Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function TKeyboardAvoidView() {
    const [userName, setUsername] = useState("");

    const handleTextInput = () => {
        Alert.alert(
            "Input",
            `Your input is ${userName}`
        )
    }

    return (
        <KeyboardAvoidingView
            style={styles.outerContainer}
            behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>

                    {/* Header */}
                    <Text style={styles.header}>
                        Header
                    </Text>

                    {/* Input */}
                    <TextInput
                        style={styles.inputStyle}
                        value={userName}
                        onChangeText={(t) => setUsername(t)}
                        placeholder='Enter username'
                    />

                    {/* Button */}
                    <View style={styles.btnContainer}>
                        <Button title='Submit' onPress={handleTextInput} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "space-between"
    },
    inputStyle: {
        marginBottom: 10,
        borderBottomWidth: 1
    },
    header: {
        fontSize: 22,
        fontWeight: 600
    },
    btnContainer: {
        marginTop: 12,
    }
})