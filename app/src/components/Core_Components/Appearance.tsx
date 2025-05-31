import React, { useEffect, useState } from 'react';
import { Appearance, Button, PixelRatio, Text, useWindowDimensions, View } from 'react-native';

export default function TAppearance() {
    const [colorSchema, setColorScheme] = useState(Appearance.getColorScheme());
    const { height } = useWindowDimensions();

    useEffect(() => {
        const newColorSchema = Appearance.addChangeListener(({ colorScheme }) => {
            setColorScheme(colorScheme);
        })

        return () => {
            newColorSchema.remove()
        }
    }, [])

    return (
        <View style={{ marginHorizontal: 12, justifyContent: "center", alignItems: "center", height }}>
            <Text style={{ fontSize: PixelRatio.roundToNearestPixel(18), marginBottom: 12 }}>
                User Color Preference is
                {" "}
                <Text style={{ fontWeight: 800 }}>
                    {colorSchema}
                </Text>
            </Text>
            <Button title='Switch Color Preference' onPress={() => Appearance.setColorScheme(colorSchema === "dark" ? "light" : "dark")} />
        </View>
    )
}