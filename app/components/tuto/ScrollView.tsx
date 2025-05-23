import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, TextInput, View } from 'react-native';


const Input = () => {
    return <TextInput style={styles.input} placeholder='Enter you text' />
}

export default function TScrollView() {
    const [refreshing, setRefreshing] = React.useState(false);
    const [dockItem, setDockItem] = React.useState<number>(1)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                stickyHeaderIndices={[dockItem]}
                contentContainerStyle={styles.contentContainer}
                style={{ flexDirection: "column", flex: 1 }}
                contentOffset={{ y: 100, x: 0 }}
                // decelerationRate={'fast'}
                // disableIntervalMomentum
                // disableScrollViewPanResponder
                fadingEdgeLength={100}
                endFillColor={"yellow"}
                keyboardDismissMode='on-drag'
                onScroll={() => console.log("Scrolling...")}
                onMomentumScrollBegin={() => console.log("begin")}
                onMomentumScrollEnd={() => console.log("end..")}
                scrollEventThrottle={16}
            >
                <View>
                    <Input />
                </View>

                {
                    Array.from(new Array(20)).map((_, i) => (
                        <View key={i} style={[styles.card, { marginBottom: 8, backgroundColor: i === dockItem - 1 ? "red" : "lightblue" }]}>
                            <View style={{ height: "50%", width: "50%", backgroundColor: "blue" }} />
                        </View>
                    ))
                }
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 8,
        padding: 8
    },
    contentContainer: {
        paddingVertical: 8,
        paddingHorizontal: 8
    }
})