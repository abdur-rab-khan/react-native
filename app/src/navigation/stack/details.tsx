import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details() {
    const params = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: params.name.toString()
                }}
            />
            <Text style={styles.titleText}>
                Id is
                {" "}
                <Text style={styles.boldText}>
                    {
                        params.name
                    }
                </Text>
            </Text>
            <Link href={
                {
                    pathname: "/details",
                    params: {
                        name: params.name === "123" ? "321" : "123"
                    }
                }
            }>
                To to Details
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 22
    },
    boldText: {
        fontWeight: 600
    }
})