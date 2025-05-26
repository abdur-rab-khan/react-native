import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const IMAGE_URL = [
    [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://plus.unsplash.com/premium_photo-1664547606956-22749d0e0d77?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1499980762202-04245017d5bf?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    [
        'https://images.unsplash.com/photo-1580133318324-f2f76d987dd8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669741909413-08072ccaedde?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
]
function Card({ urls }: { urls: string[] }) {
    return (
        <SafeAreaView style={style.cardContainer}>
            <SafeAreaView style={style.card}>
                <Image source={{
                    uri: urls[0]
                }}
                    style={{ width: '100%', height: '100%', resizeMode: "cover" }}
                    progressiveRenderingEnabled
                />
            </SafeAreaView>
            <SafeAreaView style={style.card}>
                <Image
                    source={{
                        uri: urls[1]
                    }}
                    style={{ width: '100%', height: '100%', resizeMode: "cover" }}
                    progressiveRenderingEnabled
                />
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default function FullImageCard() {
    return (
        <ScrollView>
            <SafeAreaProvider style={style.containers}>
                {
                    IMAGE_URL.map((is, index) => <Card key={index} urls={is} />)
                }
            </SafeAreaProvider>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    containers: {
        flexDirection: "column",
        padding: 8,
        gap: 8,
    },
    cardContainer: {
        flexDirection: "row",
        gap: 8,
    },
    card: {
        flex: 0.5,
        height: 250,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        elevation: 5,
    }
})