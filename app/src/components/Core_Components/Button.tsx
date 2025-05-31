import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Separator = () => <View style={style.separator} />;

export default function TButton() {
    return (
        <SafeAreaProvider style={style.container}>
            <SafeAreaView>
                <View>
                    <Text style={style.title}>
                        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
                    </Text>
                    <Button
                        title='PRESS ME'
                        onPress={() => Alert.alert("Simple button pressed.")}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={style.title}>
                        Adjust the color in a way that looks standard on each platform. On iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
                    </Text>
                    <Button
                        title='PRESS ME'
                        color="#f194ff"
                        onPress={() => Alert.alert("Custom button pressed.")}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={style.title}>
                        All interaction for the component are disabled.
                    </Text>
                    <Button
                        title='PRESS ME'
                        disabled
                    />
                </View>
                <Separator />
                <View>
                    <Text style={style.title}>
                        This layout strategy lets the title define the width of the button.
                    </Text>
                    <View style={style.fixToText}>
                        <Button
                            title="Left button"
                            onPress={() => Alert.alert('Left button pressed')}
                        />
                        <Button
                            title="Right button"
                            onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    title: {
        marginBottom: 12,
        fontSize: 18,
        textAlign: "center"
    },
    fixToText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})