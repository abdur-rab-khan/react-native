import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function TImage() {
    const [imageSize, setImageSize] = useState<{ height: number, width: number }>();


    useEffect(() => {
        const uri = "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


        Image.prefetch(uri).then((v) => {
            if (v) {
                console.log("Image is prefetched successfully")
            } else {
                console.log("Image is not prefetched")
            }
        })

        Image.getSize(
            uri,
            (w, h) => {
                setImageSize({
                    height: h,
                    width: w
                })
            },
            (e) => console.error(e)
        )
    }, [])

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


                {/* Prefetching the image */}
                <Image
                    style={{ height: imageSize?.height, width: imageSize?.width }}
                    source={{
                        uri: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }}
                    onProgress={({ nativeEvent }) => {
                        const { loaded, total } = nativeEvent;
                        console.log(`Loaded: ${loaded} -- Total: ${total}`)
                    }}
                    onLoadEnd={() => console.log("Image is loaded.")}
                />
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