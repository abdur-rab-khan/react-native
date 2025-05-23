import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

interface ItemData {
    id: string
    title: string
}



const Item = ({ backgroundColor, item, onPress, textColor }: ItemProps) => {
    console.log("workingll...")
    return (
        <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={onPress}>
            <Text style={[styles.title, { color: textColor }]}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}


interface ItemProps {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};


export default function TFlatList() {
    const [selectedId, setSelectedId] = useState<string>()

    const renderItems = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.id === selectedId ? "violet" : "lightpink";
        const textColor = item.id === selectedId ? "white" : "black"


        return <Item
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
            textColor={textColor}
            item={item}
        />
    }



    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <FlatList
                    contentContainerStyle={styles.contentContainer}
                    data={DATA}
                    // renderItem={({ item }) => <Items title={item.title} />}
                    renderItem={renderItems}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 12,
        flexDirection: "column",
        gap: 10
    },
    item: {
        height: 100,
        padding: 18,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink"
    },
    title: {
        fontSize: 18,
    }
})