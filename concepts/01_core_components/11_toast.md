# Toast in React Native

> React Native provides **`Android Toast API`** as a js modules to work with them. It provides method call **`ToastAndroid.show(message, duration)`**.

- For more customization alternatively it provides **`ToastAndroid.showWithGravity(message, duration, gravity)`** to configure instead of using **`ToastAndroid.show(message,duration)`**, from where toast will appear.
- For more details see from [here](https://developer.android.com/about/versions/11/behavior-changes-11#text-toast-api-changes)

## Example

```ts
import React from "react";
import { Button, StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TToast() {
  const handleSimpleToast = () => {
    ToastAndroid.show("Simple Toast", 0.5);
  };

  const handleToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Toast With Gravity",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };

  const handleToastWithGravityOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Toggling Toast with Gravity and Offset",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      100,
      200
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.containerView}>
        <Button title="Toggle Simple Toast" onPress={handleSimpleToast} />
        <Button title="Toggle With Gravity" onPress={handleToastWithGravity} />
        <Button
          title="Toggle With Gravity and offset"
          onPress={handleToastWithGravityOffset}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    gap: 8,
  },
});
```

## Methods

### 1. `show()`

- To show simple toast with **message** and **duration**. On Higher Android version we can use notification or snackbar

  ```ts
  static show(message: string, duration: number);
  ```

### 2. `showWithGravity()`

- This is used to show toast with **direction** also.

  ```ts
  static showWithGravity(message: string, duration: number, gravity: number);
  ```

### 3. `showWithGravityAndOffset()`

- This i used to show toast with **offset** also.

```ts
static showWithGravityAndOffset(
  message: string,
  duration: number,
  gravity: number,
  xOffset: number,
  yOffset: number,
);
```

## Props

### 1. `SHORT`

- Indicates the duration on the screen.

  ```ts
  static SHORT: number;
  ```

### 2. `LONG`

### 3. `TOP`

- Indicates the position on the screen.

  ```ts
  static TOP: number;
  ```

### 4. `BOTTOM`

### 5. `CENTER`
