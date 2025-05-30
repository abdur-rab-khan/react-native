import TView from '@/components/Core_Components/View'
import Notification from '@/components/Notification'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function index() {
    return (
        <React.Fragment>
            {/* <SafeAreaProvider style={styles.darkTheme}> */}
            {/* <SafeAreaView> */}

            {/* ------------------- CORE COMPONENT START ----------------- */}
            <TView />
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
            {/* <TAppearance /> */}
            {/* <TModal /> */}
            {/* <TLinking /> */}
            {/* <OpenCustomSettings /> */}
            {/* <SendIntents /> */}
            {/* <TPermissions /> */}
            {/* ------------------- CORE COMPONENT END ----------------- */}


            {/* ------------------- NOTIFICATION API START----------------- */}
            <Notification />
            {/* ------------------- NOTIFICATION API END ----------------- */}

            {/* </SafeAreaView > */}
            {/* </SafeAreaProvider> */}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    darkTheme: {
        backgroundColor: "#001f2c",
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    }
})