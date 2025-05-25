import React from 'react';
import {
    Dimensions,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Get screen pixel density (1, 2, 3, etc.)
const density = PixelRatio.get();

// Calculate a high-resolution image width based on device
const imageWidth = screenWidth * 0.4; // 40% of screen
const highResImageWidth = PixelRatio.getPixelSizeForLayoutSize(imageWidth);

// Round font size and padding for better sharpness
const fontSize = PixelRatio.roundToNearestPixel(16);
const padding = PixelRatio.roundToNearestPixel(12);

const TPixelRatio = () => {
    return (
        <View style={[styles.card, { padding }]}>
            <Image
                style={[styles.image, { width: imageWidth, height: imageWidth }]}
                source={{
                    uri: `https://via.placeholder.com/${Math.round(highResImageWidth)}`, // sharp image
                }}
            />
            <Text style={[styles.name, { fontSize }]}>John Doe</Text>
            <Text style={[styles.bio, { fontSize: fontSize * 0.85 }]}>
                Mobile developer who loves building clean and responsive UIs.
            </Text>
            <Text style={styles.meta}>Pixel Ratio: {density}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginHorizontal: 20,
    },
    image: {
        borderRadius: 100,
        marginBottom: 15,
    },
    name: {
        fontWeight: 'bold',
        color: '#333',
    },
    bio: {
        color: '#666',
        textAlign: 'center',
        marginVertical: 8,
        paddingHorizontal: 20,
    },
    meta: {
        fontSize: 12,
        color: '#999',
        marginTop: 10,
        marginBottom: 15,
    },
});

export default TPixelRatio;
