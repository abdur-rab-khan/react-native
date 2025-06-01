import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
    const id = useLocalSearchParams();


    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Post Id is {" "}
                <Text style={styles.boldText}>
                    {
                        id?.postId ?? null
                    }
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink",
    },
    text: {
        fontSize: 18
    },
    boldText: {
        fontWeight: 800
    }
})