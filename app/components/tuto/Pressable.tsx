import React from 'react'
import { Alert, Pressable, StyleSheet, Text, Vibration, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Separator = () => <View style={styles.separator} />

export default function TPressable() {

    const handleLongPress = () => {
        Vibration.vibrate(50)
        Alert.alert("Long Press")
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
                <Text style={styles.titleText}>
                    Pressable
                </Text>
                <Separator />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightblue'
                        },
                        styles.button
                    ]}
                    android_ripple={{
                        color: "#ffffff",
                    }}
                >
                    {
                        ({ pressed }) => (
                            <Text style={{ color: pressed ? 'red' : 'white' }}>
                                Press Me
                            </Text>
                        )
                    }
                </Pressable>

                <Text style={[styles.titleText, { marginTop: 8 }]}>
                    Long Press
                </Text>
                <Separator />

                <Pressable style={
                    ({ pressed }) =>
                        [
                            {
                                backgroundColor: pressed ? "red" : "lightblue",
                                elevation: pressed ? 4 : 12
                            },
                            styles.button,
                        ]
                }
                    onPress={() => Alert.alert("Press")}
                    onLongPress={handleLongPress}
                    delayLongPress={250}
                >
                    <Text>
                        Long Press
                    </Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18
    },
    titleText: {
        fontSize: 24
    },
    separator: {
        marginVertical: 12,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
        color: "white",
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: 1,
        overflow: "hidden"
    }
})