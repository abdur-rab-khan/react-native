import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TModal() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centerContainer}>
                <Modal
                    animationType='fade'
                    visible={visible}
                    transparent={false}
                    // backdropColor={"black"} // Change the background color of the model
                    onShow={() => console.log("Showing....")}
                    onRequestClose={() => setVisible(false)} // It call when system back btn press.
                >
                    <View style={styles.centerContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>
                                Model Container
                            </Text>
                            <Text>
                                Sample Model Container.
                            </Text>
                            <Pressable style={styles.buttonStyle} onPress={() => setVisible(false)}>
                                <Text style={{ textAlign: "center", color: "lightyellow" }}>
                                    Close Me
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable style={styles.buttonStyle}>
                    <Text style={{ textAlign: "center", color: "lightyellow" }} onPress={() => setVisible(true)}>
                        Open Me
                    </Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        gap: 12,
        width: "85%",
        borderWidth: 1,
        borderRadius: 8,
        paddingInline: 12,
        paddingBlock: 8,
    },
    modalTitle: {
        fontSize: 18,

    },
    buttonStyle: {
        paddingBlock: 8,
        paddingInline: 6,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: "lightpink",
    }
})