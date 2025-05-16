import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


export default function TImage() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={style.container}>

                {/* Loading from local storage */}
                <Image
                    style={style.tinyLogo}
                    source={require("@/assets/images/favicon.png")}
                />

                {/* Loading from uri */}
                <Image
                    style={style.logo}
                    source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                />

                {/* Loading from data */}
                <Image
                    style={style.logo}
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
                    }}
                />

                <View style={style.container}>
                    <Image
                        style={style.stretch}
                        source={require("@/assets/images/favicon.png")}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    logo: {
        height: 66,
        width: 58
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: "stretch"
    }
})