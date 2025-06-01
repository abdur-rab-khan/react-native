import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const dataList = [
    {
        id: 1,
        title: "Sunset Over the Mountains",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
        id: 2,
        title: "City Skyline at Night",
        image: "https://images.unsplash.com/photo-1584499653704-cd4b36b75cde"
    },
    {
        id: 3,
        title: "Forest Trail",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        id: 4,
        title: "Desert Dunes",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        id: 5,
        title: "Ocean Waves",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    }
];

export default function Index() {

    const renderItems = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image src={item.image} style={styles.image} />
                <Text>
                    {item.title}
                </Text>
                <Link
                    href={{
                        pathname: '/(tabs)/feed/[postId]',
                        params: { postId: item.id }
                    }}
                    style={{ backgroundColor: "blue", color: "white", paddingHorizontal: 8, paddingVertical: 6, marginTop: 6, borderRadius: 12 }}
                    withAnchor
                >
                    Go to post
                </Link>
            </View>
        )
    }

    return (
        <FlatList
            data={dataList}
            numColumns={2}
            renderItem={renderItems}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(i) => i.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        paddingHorizontal: 12
    },
    listContainer: {
        paddingHorizontal: 8,
    },
    card: {
        flex: 1,
        padding: 8,
        margin: 9,
        borderRadius: 12,
        backgroundColor: "yellow"
    },
    image: {
        height: 200,
        width: "100%"
    }
})