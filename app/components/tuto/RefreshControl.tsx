import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Item = ({ index }) => <View style={styles.item}>
    <Text style={styles.indexText}>
        {index}
    </Text>
</View>

export default function TRefreshControl() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={styles.scrollStyle}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            colors={["red", "blue", "pink"]}
                            progressBackgroundColor={"black"}
                            size={"large"}
                            progressViewOffset={200}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {
                        Array.from(Array(20)).map((_, index) =>
                            <Item key={index} index={index} />
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "lightpink",
        padding: 22,
        borderRadius: 12
    },
    indexText: {
        fontSize: 18,
    },
    scrollStyle: {
        marginHorizontal: 8,
        flexDirection: "column",
        gap: 12
    }
})