import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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
    }, {
        id: 'bad7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3224ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0dsfsff-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }, {
        id: 'bd7acbea-c1sfhsob1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48dshfo3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bdsfhso96-145571e29d72',
        title: 'Third Item',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3fhosfjad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa9hsfhso7f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-sfho145571e29d72',
        title: 'Third Item',
    },



];

interface ItemData {
    id: string
    title: string
}



const Item = ({ backgroundColor, item, onPress, textColor }: ItemProps) => {
    return (
        <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={onPress}>
            <Text style={[styles.title, { color: textColor }]}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}

const Separator = () => <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderColor: "black", marginBlock: 8 }} />

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
        <FlatList
            contentContainerStyle={styles.contentContainer}
            data={DATA}
            // renderItem={({ item }) => <Items title={item.title} />}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            extraData={selectedId}
            progressViewOffset={100}
            ItemSeparatorComponent={Separator}
        />
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 12,
        flexDirection: "column",
        // gap: 10
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