# Alert in React Native

> It is used to launch an **Alert** dialog with the specified title and message, Optionally you can provide list of button along with onPress callback. It will work on both **iOS** and **Android**.

## Example

```ts
import React from "react";
import { Alert, Button, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TAlert() {
  const handleTwoButtonAlert = () => {
    Alert.alert("Alert", "Two button alert", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
      {
        text: "Okay",
        onPress: () => console.log("Okay"),
      },
    ]);
  };

  const handleThreeButtonAlert = () => {
    Alert.alert("Alert", "Three button alert", [
      {
        text: "Ask me Later",
        onPress: () => console.log("Okay"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
      {
        text: "Okay",
        onPress: () => console.log("Okay"),
      },
    ]);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.viewContainer}>
        <Button title="Two Button Alert" onPress={handleTwoButtonAlert} />
        <Button title="Three Button Alert" onPress={handleThreeButtonAlert} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {
    flexDirection: "column",
    gap: 8,
  },
});
```

## Methods

### 1. `alert()`

- It is used to toggle alert.

| Name     | Type                          | Description                                          |
| -------- | ----------------------------- | ---------------------------------------------------- |
| title \* | string                        | The toggle title.                                    |
| message  | string                        | An optional message that appears below of the title. |
| button   | [AlertButton[]](#alertbutton) | An optional array containing buttons configuration.  |
| options  | AlertOption                   | An Optional Alert Configuration                      |

### `AlertButton[]`

| Name    | Type              | Description                      |
| ------- | ----------------- | -------------------------------- |
| text    | string            | Button label.                    |
| onPress | function Callback | function when button is pressed. |

### `AlertOption`

| Name               | Type     | Description                                                                                                           | Platform |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- | -------- |
| cancelable         | boolean  | Defines if alert can be dismissed by tapping outside of the alert box.                                                | Android  |
| userInterfaceStyle | string   | The interface style used for the alert, can be set to light or dark, otherwise the default system style will be used. | iOS      |
| onDismiss          | function | Callback function fired when alert has been dismissed.                                                                | Android  |
