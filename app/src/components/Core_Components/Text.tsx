import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TText() {
    const [titleText, setTitleText] = useState("Bird's Nest")
    const bodyText = "This is not really a bird nest."

    const handleOnPressed = () => {
        setTitleText("Bird's Nest [Pressed]")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={style.container} onResponderMove={() => console.log("moving....")}>
                <Text style={style.baseText}>
                    <Text style={style.titleText} onPress={handleOnPressed} onPressOut={() => Alert.alert("Press out")} onLongPress={() => Alert.alert("Long Press")}>
                        {titleText}
                        {'\n'}
                        {'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                        {bodyText}
                    </Text>
                </Text>
                <Text style={style.boldText}>
                    {'\n'}
                    {'\n'}

                    I am bold <Text style={style.redText}>and red</Text>

                    {'\n'}
                    {'\n'}
                </Text>

                <Text>
                    <Text>First part end</Text>
                    <Text> second part</Text>

                    {'\n'}
                    {'\n'}
                </Text>

                <View>
                    <Text>First part end</Text>
                    <Text> second part</Text>
                </View>

                <View
                    style={style.viewContainer}
                    onStartShouldSetResponderCapture={() => false}
                // onResponderMove={() => { console.log("moving.....") }}
                >
                    <View style={style.viewChildContainer}
                        onStartShouldSetResponder={() => true}
                        onResponderMove={() => console.log("Moving...")}
                        onResponderGrant={(e) => console.log("Respond Granted")}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        color: "yellow"
    },
    baseText: {
        fontFamily: "Cochin",
        color: "blue"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    boldText: {
        fontWeight: "bold"
    },
    redText: {
        color: "red"
    },
    viewContainer: {
        height: 100,
        backgroundColor: "yellow",
        pointerEvents: "none"
    },
    viewChildContainer: {
        height: 100,
        width: 100,
        backgroundColor: "blue"
    }
})