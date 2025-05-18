import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TScrollView() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text>
                Hello world
            </Text>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                StickyHeaderComponent={
                    <TextInput defaultValue='Hello world' style={{ borderColor: "black" }} />
                }
                style={{ flexDirection: "column", flex: 1 }}
            >
                {
                    Array.from(new Array(20)).map((_, i) => (
                        <View key={i} style={[styles.card, { marginBottom: 8 }]} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 150,
        backgroundColor: "lightblue"
    }
})