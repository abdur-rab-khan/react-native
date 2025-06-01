import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    useEffect(() => {
        // navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Link
                style={styles.button}
                href={{
                    pathname: "/details",
                    params: {
                        name: "123"
                    }
                }}
            >
                Go to Details
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        color: "white",
        backgroundColor: "blue",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 14
    }
})