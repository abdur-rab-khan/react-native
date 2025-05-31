import React, { useEffect, useState } from 'react';
import { Appearance, Button, StatusBar, StyleSheet, Text, View } from 'react-native';


const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export default function TStatusBar() {
    const [hidden, setHidden] = useState(false);
    const [barStyle, setBarStyle] = useState<typeof STYLES[number]>(STYLES[0]);

    const toggleBarStyle = () => {
        const newBarIndex = (STYLES.indexOf(barStyle) + 1) % STYLES.length;
        setBarStyle(STYLES[newBarIndex])
    }

    useEffect(() => {
        const colorSchema = Appearance.getColorScheme();

        if (colorSchema === "dark") {
            setBarStyle("light-content")
        } else {
            setBarStyle("dark-content")
        }
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                animated
                barStyle={barStyle}
                hidden={hidden}
            />
            <View>
                <Text style={styles.statusTitle}>
                    Status Bar is
                    {" "}
                    <Text style={styles.highlightText}>
                        {hidden ? "hidden" : "visible"}
                    </Text>
                </Text>
                <Text style={styles.statusTitle}>
                    Status Bar is
                    {" "}
                    <Text style={styles.highlightText}>
                        {barStyle}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonView}>
                <Button title='Toggle Status Bar' onPress={() => setHidden(prev => !prev)} />
                <Button title='Change Status Bar Style' onPress={toggleBarStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonView: {
        gap: 8
    },
    statusTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "lightyellow"
    },
    highlightText: {
        fontWeight: 900,
        color: "red"
    }
})