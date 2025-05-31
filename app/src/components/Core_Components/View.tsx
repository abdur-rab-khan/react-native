import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TView() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, flexDirection: "row", gap: 5, marginTop: 12, paddingHorizontal: 8 }}>
                <View style={{ backgroundColor: "red", flex: 0.2 }}></View>
                <View style={{ backgroundColor: "blue", flex: 0.4 }}></View>

                <View collapsable={true}>
                    <Text>
                        Hello world!
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}