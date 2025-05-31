import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TInput() {
    const [text, setText] = useState("Useless Text")
    const [multilineText, setMultilineText] = useState("TextInput has a border at the bottom of its view by default. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent.")

    return (
        <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
            <TextInput
                style={style.input}
                placeholder='Enter text'
                value={text}
                onChangeText={(t) => setText(t)}
                onSubmitEditing={() => Alert.alert("Submitting...", "Input text is going to submit.")}
            />
            <Text>
                {'\n'}
                {'\n'}
                Multiline InputText
            </Text>
            <TextInput
                value={multilineText}
                editable
                multiline
                onChangeText={(t) => setMultilineText(t)}
                placeholder='Multiline input text'
                style={style.textInput}
                numberOfLines={20}
                maxLength={400}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 12
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        marginTop: 8
    },
})