# `useWindow`, `PixelRatio`, `Appearance`

- [`useWindow`, `PixelRatio`, `Appearance`](#usewindow-pixelratio-appearance)
  - [`useWindowDimensions`](#usewindowdimensions)
  - [`PixelRatio`](#pixelratio)
    - [Example](#example)
    - [Fetching Correct Size Image](#fetching-correct-size-image)
    - [Methods](#methods)
      - [1. `.get()`](#1-get)
      - [2. `.getFontScale()`](#2-getfontscale)
      - [3. `.getPixelSizeForLayoutSize()`](#3-getpixelsizeforlayoutsize)
      - [4. `.roundToNearestPixel()`](#4-roundtonearestpixel)
  - [Appearance](#appearance)
    - [Example a](#example-a)
    - [Methods](#methods-1)
      - [1. `getColorScheme()`](#1-getcolorscheme)
      - [2. `setColorScheme()`](#2-setcolorscheme)
      - [3. `addChangeListener()`](#3-addchangelistener)

## `useWindowDimensions`

- It is commonly used to build responsive app for platforms such as `windows`, `tablets`, `mobile app`, `web app`.

```ts
import React from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Window Dimension Data</Text>
        <Text>Height: {height}</Text>
        <Text>Width: {width}</Text>
        <Text>Font scale: {fontScale}</Text>
        <Text>Pixel ratio: {scale}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default App;
```

## `PixelRatio`

- Using **`PixelRatio`**, gives you access to the device's pixel density and font scale.
- **`PixelRatio`** is a Utility function that help us to manager screen density across different devices. It plays a key role in making app look consistent on screens with different pixel densities

### Example

```ts
import React from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

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
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
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
    fontWeight: "bold",
    color: "#333",
  },
  bio: {
    color: "#666",
    textAlign: "center",
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  meta: {
    fontSize: 12,
    color: "#999",
    marginTop: 10,
    marginBottom: 15,
  },
});

export default TPixelRatio;
```

### Fetching Correct Size Image

- Instead of fetching constant resolution image (from you `backend` or anyother place), you can fetch higher resolution image, based on device pixel density.

  ```ts
  const image = getImage({
    width: PixelRatio.getPixelSizeForLayoutSize(200), // It provide the size based on pixel density of your device.
    height: PixelRatio.getPixelSizeForLayoutSize(100),
  });

  <Image source={image} style={{ width: 200, height: 100 }} />;
  ```

-

### Methods

#### 1. `.get()`

- It returns the device pixel density. Some Examples:

#### 2. `.getFontScale()`

#### 3. `.getPixelSizeForLayoutSize()`

- Converts a layout size (in dp) to the equivalent pixel size.
- Common use with images as we see above or native modules tht need size in actual pixels.

#### 4. `.roundToNearestPixel()`

- Rounds a layout size to the nearest whole layout pixel.
- Useful for precise alignment on screens.

## Appearance

> The **`Appearance`** module helps to get the user appearance preference such as their color preferred (Dark / Light) mode.

### Example a

```ts
import React, { useEffect, useState } from "react";
import {
  Appearance,
  Button,
  PixelRatio,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function TAppearance() {
  const [colorSchema, setColorScheme] = useState(Appearance.getColorScheme());
  const { height } = useWindowDimensions();

  useEffect(() => {
    const newColorSchema = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => {
      newColorSchema.remove();
    };
  }, []);

  return (
    <View
      style={{
        marginHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        height,
      }}
    >
      <Text
        style={{
          fontSize: PixelRatio.roundToNearestPixel(18),
          marginBottom: 12,
        }}
      >
        User Color Preference is{" "}
        <Text style={{ fontWeight: 800 }}>{colorSchema}</Text>
      </Text>
      <Button
        title="Switch Color Preference"
        onPress={() =>
          Appearance.setColorScheme(colorSchema === "dark" ? "light" : "dark")
        }
      />
    </View>
  );
}
```

### Methods

#### 1. `getColorScheme()`

- Indicates the current user preferred color schema, This may later upon, either direct through device level or interface level when changes happen using **`setColorScheme()`**.

- We can get this value from `useColorScheme` hook also.

```ts
static setColorScheme('light' | 'dark' | null): void;
```

#### 2. `setColorScheme()`

- Force the application always adopt to light/dark mode interface style. It does not apply on device level only apply on interface level.

```ts
static addChangeListener(
  listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,
): NativeEventSubscription;
```

#### 3. `addChangeListener()`

- This event occur when appearance preferences change

```ts
static addChangeListener(
  listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,
): NativeEventSubscription;
```
