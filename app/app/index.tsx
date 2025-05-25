import TAppearance from '@/components/tuto/Appearance'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function index() {
    return (
        <React.Fragment>
            {/* <SafeAreaProvider style={styles.darkTheme}> */}
            {/* <SafeAreaView> */}
            {/* <TView /> */}
            {/* <TText /> */}
            {/* <TImage /> */}
            {/* <FullImageCard /> */}
            {/* <TInput /> */}
            {/* <TButton /> */}
            {/* <TScrollView /> */}
            {/* <Carousel /> */}
            {/* <TFlatList /> */}
            {/* <YouTubeLikeApp /> */}
            {/* <TSectionList /> */}
            {/* <TToast /> */}
            {/* <TAlert /> */}
            {/* <TActivityIndicator /> */}
            {/* <TRefreshControl /> */}
            {/* <TStatusBar /> */}
            {/* <TKeyboardAvoidView /> */}
            {/* </SafeAreaView> */}
            {/* </SafeAreaProvider> */}
            {/* <TShare /> */}
            {/* <PixelRatio /> */}
            <TAppearance />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    darkTheme: {
        backgroundColor: "#001f2c",
        paddingHorizontal: 12
    }
})