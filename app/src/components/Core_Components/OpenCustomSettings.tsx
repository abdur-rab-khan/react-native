import React, { useCallback, useEffect } from 'react';
import { Button, Linking, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type OpenSettingsButtonProps = {
    children: string;
};


const OpenSettingsButton = ({ children }: OpenSettingsButtonProps) => {
    const handlePress = useCallback(async () => {
        // Open the custom settings if the app has one
        await Linking.openSettings();
    }, []);

    return <Button title={children} onPress={handlePress} />;
};

export default function OpenCustomSettings() {

    useEffect(() => {
    }, [])

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
                <OpenSettingsButton>Open Settings</OpenSettingsButton>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
