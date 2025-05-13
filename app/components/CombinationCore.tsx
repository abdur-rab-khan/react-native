import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';

export default function CombinationCore() {
    const [text, setText] = useState("");

    return (
        <ScrollView>
            <Text>
                Some Text
            </Text>
            <View>
                <Text>
                    {text}
                </Text>
                <Image source={
                    {
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }
                }
                    style={{ height: 200, width: 200 }}
                />
            </View>
            <TextInput style={{
                margin: 20,
                padding: 10,
                borderRadius: 6,
                borderColor: "gray",
                borderWidth: 1,
            }}
                value={text}
                onChangeText={(text: string) => setText(text)}
                placeholder="useless placeholder"
            />
        </ScrollView>
    )
}