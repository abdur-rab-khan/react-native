import React from 'react';
import { Alert, Button, Linking, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface SendIntendProps {
    children: string,
    action: string,
    extras?: { key: string; value: string | number | boolean }[]
}

const SendIntend = ({ children, action, extras }: SendIntendProps) => {
    const handlePress = async () => {
        try {
            await Linking.sendIntent(action, extras)
        } catch (e: any) {
            Alert.alert(e.message)
        }
    }

    return <Button title={children} onPress={handlePress} />
}

export default function SendIntents() {
    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.viewContainer}>
                <SendIntend
                    action="android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS"
                >
                    Battery Optimization Settings
                </SendIntend>


                <SendIntend action="android.settings.APP_NOTIFICATION_SETTINGS"
                    extras={[
                        {
                            key: 'android.provider.extra.APP_PACKAGE',
                            value: 'com.facebook.katana',
                        },
                    ]}
                >
                    App Notification Settings
                </SendIntend>

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
    viewContainer: {
        gap: 8
    }
});