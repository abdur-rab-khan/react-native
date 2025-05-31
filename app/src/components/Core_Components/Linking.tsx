import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Linking, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const supportedURL = 'https://youtube.com';
const unsupportedURL = 'myapp://www.myapp.io/records/1234546';


interface OpenURLButtonProps {
    url: string,
    title: string
}

const OpenURLButton = ({ url, title }: OpenURLButtonProps) => {

    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);

        }
    }, [url])

    return <Button title={title} onPress={handlePress} />
}

const useInitialURL = () => {
    const [url, setUrl] = useState<string | null>(null);
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        const getUrlAsync = async () => {
            const initialUrl = await Linking.getInitialURL();

            setTimeout(() => {
                setUrl(initialUrl);
                setProcessing(false);
            }, 1000);
        };

        getUrlAsync();
    }, []);

    return { url, processing }
}

export default function TLinking() {
    const { url, processing } = useInitialURL();

    useEffect(() => {
        const subscription = Linking.addEventListener("url", ({ url }) => {
            console.log("url:- ", url)
        })

        return () => {
            subscription.remove();
        }
    })

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.viewContainer}>
                <OpenURLButton url={supportedURL} title="Open Supported url" />
                <OpenURLButton url={unsupportedURL} title="Open UnSupported url" />
                <Text>
                    {"\n"}
                    {
                        processing ? "Processing the initial url from a deep link" : `The deep link is ${url || 'None'}`
                    }
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer: {
        gap: 8
    }
})