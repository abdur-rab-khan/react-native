import React from 'react';
import { Alert, Button, PermissionsAndroid, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const requestCameraPermissions = async () => {
    try {
        const isAlreadyGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)

        if (isAlreadyGranted) {
            console.log("Permission has been already granted.")
            return;
        }

        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                //  This is rationale
                title: "Cool Photo App Camera Permission",
                message: "Cool Photo App needs access to your camera so you can take awesome pictures",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera')
        } else {
            console.log('Camera Permission denied')
        }
    } catch (err: any) {
        Alert.alert(err.message)
    }
}

export default function TPermissions() {
    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
                <Button title='Grant Camera Permission' onPress={requestCameraPermissions} />
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