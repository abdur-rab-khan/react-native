import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 200; // Width of each item (used for snapping)

const data = Array.from({ length: 10 }).map((_, i) => `Item ${i + 1}`);

const Carousel = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
            showsHorizontalScrollIndicator={false}

            // 🎯 Important for snapping behavior
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"

            // ✅ Prevents skipping multiple items
            disableIntervalMomentum={true}

            contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        width: ITEM_WIDTH,
        height: 150,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Carousel;
