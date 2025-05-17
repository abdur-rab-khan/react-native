# Image in React Native

> In React Native **`<Image>`** is a component used to display an Image including, **Network Image**, **static resource**, **temporary local image** and **image from disk**, such as **camera roll**.

- [Image in React Native](#image-in-react-native)
  - [Image Component](#image-component)
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

## Image Component

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

- A string representing list of **`url's`** of all possible screen sizes and resolution of an image.
- **Example:** \*\*`Example: srcSet={'<https://reactnative.dev/img/tiny_logo.png> 1x, <https://reactnative.dev/img/header_logo.svg> 2x'}

`

#### 4. [`style`](../02_style/02_image.md)

#### 5. `testID`

#### 6. `tintColor`

- Change the color of all non-transparent pixels.

| Type     |
| -------- |
| `string` |

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

- Invoked when error is happen during load time.

#### 2. `onLayout`

- Invoked on mount and on layout changes.

#### 3. `onLoad`

- Invoked when load completes successfully.

#### 4. `onLoadEnd`

- Invoked when image is loaded successfully.

#### 5. `onLoadStart`

- Invoked when image is start loading

#### 6. `onPartialLoad` -- IOS

#### 7. `onProgress`

- It will return the progress of the image during the loaded time. It invoke when image is start downloading.

```ts
<Image
  style={{ height: imageSize?.height, width: imageSize?.width }}
  source={{
    uri: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }}
  onProgress={({ nativeEvent }) => {
    const { loaded, total } = nativeEvent;
    console.log(`Loaded: ${loaded} -- Total: ${total}`);
  }}
  onLoadEnd={() => console.log("Image is loaded.")}
/>
```

### Others

#### 1. `progressiveRenderingEnabled` -- Android

- **`True`**, when you want to display a low-quality blurry version of the image during downloading of the image. After downloading we will got full version of an image.

```ts
<Image
  source={{ uri: "https://example.com/image.jpg" }}
  style={{ width: 300, height: 200 }}
  progressiveRenderingEnabled={true}
/>
```

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

- It returns the size of the given uri. because React native does not know about the size of image. **`Image.getSize()`** allows us to retrieve actual dimension (height and width) of the image asynchronously for the sake of adjustment of layout.

```ts
Image.getSize(
  imageUrl,
  (width, height) => {
    setImageSize({ width, height });
  },
  (error) => {
    console.error("Failed to get image size:", error);
  }
);
```

#### 3. `getSizeWithHeaders()`

- It is the extension version of **`Image.getSize()`**, It is introduce to handle cases where the image requires https headers (like authentication tokens of custom headers) in the request to access the image.

```js
useEffect(() => {
  const imageUrl = "https://secure.example.com/protected-image.jpg";
  const headers = {
    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    "Custom-Header": "ExampleValue",
  };

  Image.getSizeWithHeaders(
    imageUrl,
    headers,
    (width, height) => {
      setImageSize({ width, height });
    },
    (error) => {
      console.error("Error fetching image size:", error);
    }
  );
}, []);
```

#### 4. `prefetch()`

- **`prefetch()`** the remote image for later use by downloading it to the disk cache. To improve performance and user-experience by avoiding delays when the image first displayed.
- It will automatically detect whether the image if cached or not if yes it load instantly from cache otherwise it will cache it.

```ts
const [ready, setReady] = useState(false);

useEffect(() => {
  Image.prefetch("https://example.com/photo.jpg")
    .then(() => setReady(true))
    .catch(() => setReady(true)); // Fail-safe: continue even if failed
}, []);

return (
  <View>
    {ready ? (
      <Image
        source={{ uri: "https://example.com/photo.jpg" }}
        style={{ width: 200, height: 200 }}
      />
    ) : (
      <Text>Loading image...</Text>
    )}
  </View>
);
```

#### 5. `queryCache()`

- Checks whether specified image URIs are cached locally.
- Returns a Promise that resolves to a mapping of URI to cache status (`'memory'`, `'disk'`, or `'none'`).
- If an image is cached, it will return the mapped URI; otherwise, it returns `null`.

```js
Image.queryCache([
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
])
  .then((cachedImages) => {
    console.log("Cached images:", cachedImages);
    // Example output: { 'https://example.com/image1.jpg': 'disk', 'https://example.com/image2.jpg': 'none' }
  })
  .catch((error) => {
    console.error("Error querying cache:", error);
  });
```

#### 6. `resolveAssetSource()`

- It is a utility method used to get the metadata of a static (local) image.
- It does not work with remote image.

```ts
import React from "react";
import { View, Text, Image } from "react-native";

const logo = require("./assets/logo.png");

const ImageInfoExample = () => {
  const imageInfo = Image.resolveAssetSource(logo);

  return (
    <View>
      <Text>URI: {imageInfo.uri}</Text>
      <Text>Width: {imageInfo.width}</Text>
      <Text>Height: {imageInfo.height}</Text>

      <Image
        source={logo}
        style={{ width: imageInfo.width, height: imageInfo.height }}
      />
    </View>
  );
};

export default ImageInfoExample;
```

### ImageSource
