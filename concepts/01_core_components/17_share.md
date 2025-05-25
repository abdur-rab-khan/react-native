# Share in React Native

> It is used to show dialog to share text content.

## Example

```ts
import React from "react";
import { Alert, Button, Share, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TShare() {
  const handlePress = async () => {
    try {
      const result = await Share.share(
        {
          title: "Share",
          message: "Trying React Native Share feature.",
          url: "https://reactnative.dev/docs/share", // -- iOS
        },
        {
          dialogTitle: "Trying Share Feature",
          subject: "Works with email", // -- iOS
          tintColor: "blue", // -- iOS
        }
      );

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // Share
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (e: any) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <Button title="Share" onPress={handlePress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  innerContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
```
