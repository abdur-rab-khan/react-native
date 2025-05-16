# Image in React Native

> In React Native **`<Image>`** is a component used to display an Image including, **Network Image**, **static resource**, **temporary local image** and **image from disk**, such as **camera roll**.

- [Image in React Native](#image-in-react-native)
  - [GIF and WebP support on Android](#gif-and-webp-support-on-android)
  - [Props](#props)
    - [Important](#important)
      - [1. `source`](#1-source)
      - [2. `src`](#2-src)
      - [3. `srcSet`](#3-srcset)
      - [4. `style`](#4-style)
      - [5. `testID`](#5-testid)
      - [6. `tintColor`](#6-tintcolor)
      - [7. `height`](#7-height)
      - [8. `width`](#8-width)
      - [9. `alt`](#9-alt)
      - [10. `blurRadius`](#10-blurradius)
      - [11. `crossOrigin`](#11-crossorigin)
      - [13. `defaultSource`](#13-defaultsource)
    - [Accessible](#accessible)
    - [Events](#events)
      - [1. `onError`](#1-onerror)
      - [2. `onLayout`](#2-onlayout)
      - [3. `onLoad`](#3-onload)
      - [4. `onLoadEnd`](#4-onloadend)
      - [5. `onLoadStart`](#5-onloadstart)
      - [6. `onPartialLoad` -- IOS](#6-onpartialload----ios)
      - [7. `onProgress`](#7-onprogress)
    - [Others](#others)
      - [1. `progressiveRenderingEnabled` -- Android](#1-progressiverenderingenabled----android)
      - [2. `referrerPolicy`](#2-referrerpolicy)
      - [3. `resizeMethod` -- Android](#3-resizemethod----android)
      - [4. `resizeMode`](#4-resizemode)
      - [5. `resizeMultiplier` -- Android](#5-resizemultiplier----android)
      - [6. `fadeDuration` -- Android](#6-fadeduration----android)
      - [7. `loadingIndicatorSource`](#7-loadingindicatorsource)
    - [Methods](#methods)
      - [1. `abortPrefetch()`](#1-abortprefetch)
      - [2. `getSize()`](#2-getsize)
      - [3. `getSizeWithHeaders()`](#3-getsizewithheaders)
      - [4. `prefetch()`](#4-prefetch)
      - [5. `queryCache()`](#5-querycache)
      - [6. `resolveAssetSource()`](#6-resolveassetsource)
    - [ImageSource](#imagesource)

```ts
import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TImage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {/* Loading from local storage */}
        <Image
          style={style.tinyLogo}
          source={require("@/assets/images/favicon.png")}
        />

        {/* Loading from uri */}
        <Image
          style={style.logo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />

        {/* Loading from data */}
        <Image
          style={style.logo}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    height: 66,
    width: 58,
  },
});
```

- We can add **`style`** to an image:

```ts
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TImage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.container}>
          <Image
            style={style.stretch}
            source={require("@/assets/images/favicon.png")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch", // Save as object-fit
  },
});
```

## GIF and WebP support on Android

- GIF and WebP are not support by default on Android. We will need to add some optional modules in **`android/app/build.gradle`**, depending on the needs of your app.

```groovy
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  implementation 'com.facebook.fresco:animated-base-support:1.3.0'

  // For animated GIF support
  implementation 'com.facebook.fresco:animated-gif:3.2.0'

  // For WebP support, including animated WebP
  implementation 'com.facebook.fresco:animated-webp:3.2.0'
  implementation 'com.facebook.fresco:webpsupport:3.2.0'

  // For WebP support, without animations
  implementation 'com.facebook.fresco:webpsupport:3.2.0'
}
```

## Props

- **🧠 Note:** It inherits [View Props](../01_core_components/02_view.md/#props).

### Important

#### 1. `source`

- The source of the image (either a remote `url`, `local file` resource).
- This props can also contains several remote URLs, specified with their `width` and `height` and may be with scale/other URI arguments. then react native will choose best `uri` to display based on the measured size of the image containers.
- A `cache` property can be added to control how networked request interacts wil the local cache.
- The currently supported formats are `png`, `jpg`, `jpeg`, `bmp`, `gif`, `webp`, `psd` (IOS only). In addition iOS support several RAW image formats.
- See from [ImageSource](#imagesource).

| Type                          |
| ----------------------------- |
| [`ImageSource`](#imagesource) |

#### 2. `src`

- A string that only represent the remote URL of the image.

| Type     |
| -------- |
| `string` |

#### 3. `srcSet`

#### 4. [`style`](../02_style/02_image.md)

#### 5. `testID`

#### 6. `tintColor`

#### 7. `height`

- Height of the image component

| Type     |
| -------- |
| `number` |

#### 8. `width`

- Width of the image component

| Type     |
| -------- |
| `number` |

#### 9. `alt`

- A string that define as an alternative text description of the image, which will be read by the screen reader when user interact it that create accessibility.

| Type     |
| -------- |
| `string` |

#### 10. `blurRadius`

- Blur filter add to the image.

| Type     |
| -------- |
| `string` |

#### 11. `crossOrigin`

- A string that specify the **`CORS`** mode, Use to fetching the image resource.

| Type                                     | Default     |
| ---------------------------------------- | ----------- |
| enum('`anonymous`', '`use-credentials`') | `anonymous` |

#### 13. `defaultSource`

- A static image to display during the loading of image source.

| Type                          |
| ----------------------------- |
| [`ImageSource`](#imagesource) |

### Accessible

### Events

#### 1. `onError`

#### 2. `onLayout`

#### 3. `onLoad`

#### 4. `onLoadEnd`

#### 5. `onLoadStart`

#### 6. `onPartialLoad` -- IOS

#### 7. `onProgress`

### Others

#### 1. `progressiveRenderingEnabled` -- Android

#### 2. `referrerPolicy`

#### 3. `resizeMethod` -- Android

#### 4. `resizeMode`

#### 5. `resizeMultiplier` -- Android

#### 6. `fadeDuration` -- Android

- Fade animation duration in milliseconds

| Type   | Default |
| ------ | ------- |
| number | `300`   |

#### 7. `loadingIndicatorSource`

- Similar to [source](#1-source)

### Methods

#### 1. `abortPrefetch()`

#### 2. `getSize()`

#### 3. `getSizeWithHeaders()`

#### 4. `prefetch()`

#### 5. `queryCache()`

#### 6. `resolveAssetSource()`

### ImageSource
