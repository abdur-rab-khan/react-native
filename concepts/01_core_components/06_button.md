# Button in React Native

> It is basic button that can run on any platform, and also support minimal customization. If you want to more customize as you app preferences, you can build your own version of button using [Pressable](#pressable) component.

- [Button in React Native](#button-in-react-native)
  - [Example](#example)
    - [Props](#props)
      - [1. `title` \*](#1-title-)
      - [2. `onPress` \*](#2-onpress-)
  - [Pressable](#pressable)
    - [How it works](#how-it-works)
    - [Props for Pressable](#props-for-pressable)
      - [1. `children`](#1-children)
      - [2. `android_disableSound`](#2-android_disablesound)
      - [3. `android_ripple`](#3-android_ripple)
      - [4. `unstable_pressDelay`](#4-unstable_pressdelay)
      - [5. `delayLongPress`](#5-delaylongpress)
      - [6. `disable`](#6-disable)
      - [7. `hitSlop`](#7-hitslop)
      - [8. `style`](#8-style)
    - [Events](#events)
      - [1. `onHoverIn`](#1-onhoverin)
      - [2. `onHoverOut`](#2-onhoverout)
      - [3. `onLongPress`](#3-onlongpress)
      - [4. `onPressIn`](#4-onpressin)
      - [5. `onPressOut`](#5-onpressout)
    - [Others](#others)
      - [1. `pressRetentionOffSet`](#1-pressretentionoffset)

## Example

```ts
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Separator = () => <View style={style.separator} />;

export default function TButton() {
  return (
    <SafeAreaProvider style={style.container}>
      <SafeAreaView>
        <View>
          <Text style={style.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="PRESS ME"
            onPress={() => Alert.alert("Simple button pressed.")}
          />
        </View>
        <Separator />
        <View>
          <Text style={style.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="PRESS ME"
            color="#f194ff"
            onPress={() => Alert.alert("Custom button pressed.")}
          />
        </View>
        <Separator />
        <View>
          <Text style={style.title}>
            All interaction for the component are disabled.
          </Text>
          <Button title="PRESS ME" disabled />
        </View>
        <Separator />
        <View>
          <Text style={style.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={style.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert("Left button pressed")}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    marginBottom: 12,
    fontSize: 18,
    textAlign: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
```

### Props

#### 1. `title` \*

#### 2. `onPress` \*

## Pressable

> Pressable is the core-component wrapper that can use to detect press iteration on any of its define children.

- **Example**

  ```ts
  <Pressable onPress={onPressFunction}>
    <Text>I'm pressable!</Text>
  </Pressable>
  ```

### How it works

- On an elements wrapped by **`Pressable`**.

  - When element pressed, **`onPressIn`** is called.
  - When element pressed out, **`onPressOut`** is called.

- After pressing **`onPressIn`**, one of the two things happen.

  1. The person remove there finger can cause to call **`onPressOut`**.
  2. If the person does not leaves there finger at least 500 milliseconds, it can lead to call **`onLongPress`**. but keep in mind **`onPressOut`** will also trigger in this situation.

- Pressable accepts a function as a child. React Native will call this function with an object like **`{ pressed: boolean }`**.

![pressable](https://reactnative.dev/docs/assets/d_pressable_pressing.svg)

- To increase the hit area of a button, We have on option to increase it by increasing the area of **`HitRect`** using **`hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}`**.

![hit-rect](https://reactnative.dev/docs/assets/d_pressable_anatomy.svg)

- **Example**

```ts
import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Separator = () => <View style={styles.separator} />;

export default function TPressable() {
  const handleLongPress = () => {
    Vibration.vibrate(50);
    Alert.alert("Long Press");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.titleText}>Pressable</Text>
        <Separator />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "lightblue",
            },
            styles.button,
          ]}
        >
          {({ pressed }) => (
            <Text style={{ color: pressed ? "red" : "white" }}>Press Me</Text>
          )}
        </Pressable>

        <Text style={[styles.titleText, { marginTop: 8 }]}>Long Press</Text>
        <Separator />

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "red" : "lightblue",
              elevation: pressed ? 4 : 12,
            },
            styles.button,
          ]}
          onPress={() => Alert.alert("Press")}
          onLongPress={handleLongPress}
          delayLongPress={250}
        >
          <Text>Long Press</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },
  titleText: {
    fontSize: 24,
  },
  separator: {
    marginVertical: 12,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
});
```

### Props for Pressable

#### 1. `children`

- Either pass **`ReactNode`** or a function that receives a boolean reflecting whether the component is currently pressed.

#### 2. `android_disableSound`

#### 3. `android_ripple`

- We can enables the android ripple effect and configures it properties.

| Name         | Type    | Required | Description                                                                                                                                                                                                                                                  |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `color`      | color   | No       | Defines the color of the ripple effect.                                                                                                                                                                                                                      |
| `borderless` | boolean | No       | Defines if ripple effect should not include border.                                                                                                                                                                                                          |
| `radius`     | number  | No       | Defines the radius of the ripple effect.                                                                                                                                                                                                                     |
| `foreground` | boolean | No       | Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them. |

#### 4. `unstable_pressDelay`

- Wait certain amount of duration (in milliseconds) after press down before calling **`onPressIn`.**

| Type         |
| ------------ |
| **`Number`** |

#### 5. `delayLongPress`

#### 6. `disable`

#### 7. `hitSlop`

- We can expand the press distance of the button using number or React Object.

```ts
hitSlop={{
    bottom: 20,
    left: null,
    right: undefined,
    top: 50
}}
```

#### 8. `style`

### Events

#### 1. `onHoverIn`

#### 2. `onHoverOut`

#### 3. `onLongPress`

#### 4. `onPressIn`

#### 5. `onPressOut`

### Others

#### 1. `pressRetentionOffSet`
