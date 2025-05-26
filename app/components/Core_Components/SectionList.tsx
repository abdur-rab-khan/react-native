import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TSectionList() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <SectionList />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}