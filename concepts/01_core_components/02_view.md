- [View in React Native](#view-in-react-native)
  - [Props](#props)
    - [Accessibility](#accessibility)
      - [1. **`accessible`**](#1-accessible)
    - [Events](#events)
      - [Click Event](#click-event)
        - [1. `onLayout`](#1-onlayout)
      - [Responder](#responder)
        - [1. `onStartShouldSetResponder`](#1-onstartshouldsetresponder)
        - [2. `onStartShouldSetResponderCapture`](#2-onstartshouldsetrespondercapture)
        - [3. `onResponderMove`](#3-onrespondermove)
        - [4. `onResponderRelease`](#4-onresponderrelease)
        - [5. `onResponderGrant`](#5-onrespondergrant)
        - [6. `onResponderReject`](#6-onresponderreject)
        - [7. `onResponderTerminate`](#7-onresponderterminate)
        - [8. `onResponderTerminateRequest`](#8-onresponderterminaterequest)
      - [Others](#others)
        - [1. `pointerEvent`](#1-pointerevent)
        - [2. `removeClippedSubViews`](#2-removeclippedsubviews)
        - [3. `renderToHardwareTextureAndroid`](#3-rendertohardwaretextureandroid)
        - [4. `role`](#4-role)
        - [5. `style`](#5-style)
        - [6. `tabIndex`](#6-tabindex)
        - [7. `testID`](#7-testid)

# View in React Native

> It is the most fundamental component in React Native for building UI. View is a container that supports layout with [flexbox](), [style](), [some touching handling]() and [accessiblity]() controls. View automatically map directly to the native view equivalent on whatever platform React Native is running.

- View are design to be nested inside other views and can have 0 children.
- The ⬇️ Example creates a **`View`** that wraps two **box** with color.

```js
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TView() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: 100, flexDirection: "row", gap: 5 }}>
        <View style={{ backgroundColor: "red", flex: 0.2 }}></View>
        <View style={{ backgroundColor: "blue", flex: 0.4 }}></View>

        <Text>Hello world!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

- `Views` are design to use [**StyleSheet**](../02_style/style.md) to style the view for better performance and clarity, although inline style are also supported.

## Props

- There are many props in view see from [here](https://reactnative.dev/docs/view#props).

### Accessibility

> Accessibility is a feature that help our application usable by people with disabilities such as those with visual, auditory, physical, or cognitive impairments. Accessibility ensures everyone can **navigate**, **understand**, and **interact** with our application.

#### 1. **`accessible`**

- While **`true`** indicates that the view is an accessible element. By default all the touchable elements are accessible.

### Events

#### Click Event

##### 1. `onLayout`

> Invoke on mount and on layout change. The event is fired immediately once the layout has been calculated. but may new layout not reflected on the screen at the time the event is received.

#### Responder

##### 1. `onStartShouldSetResponder`

> To make view become a responder on the start touch, We have to return true value **`onStartShouldSetResponder(() => true)`**.

##### 2. `onStartShouldSetResponderCapture`

> If a parent **`<View>`** want to prevent child **`<View>`** to become a responder when have to return true in the function.

```ts
// Here child <View> responder will not work.
<View
  style={style.viewContainer}
  onStartShouldSetResponderCapture={() => true}
>
  <View
    style={style.viewChildContainer}
    onStartShouldSetResponder={() => true}
    onResponderMove={() => console.log("Moving...")}
  />
</View>


// Here here i will work fine..
<View
  style={style.viewContainer}
  onStartShouldSetResponderCapture={() => false}
>
  <View
    style={style.viewChildContainer}
    onStartShouldSetResponder={() => true}
    onResponderMove={() => console.log("Moving...")}
  />
</View>
```

##### 3. `onResponderMove`

> Function called when user move there finger.

##### 4. `onResponderRelease`

> Function called when user release there finger from screen.

##### 5. `onResponderGrant`

> When view is responding for touch event this event will call. **On Android**, return **`true`** from this callback to prevent any other components from becoming responder until this responder terminates.

```ts
({nativeEvent: PressEvent}) => void ｜ boolean
```

##### 6. `onResponderReject`

> Another responder already active and will not release than this event will occur.

```ts
({nativeEvent: PressEvent}) => void
```

##### 7. `onResponderTerminate`

> The **onResponderTerminate** event is triggered when your view loses responder status before the gesture finishes — not because the user lifted their finger, but because another component or system action took over.

##### 8. `onResponderTerminateRequest`

> Some other **`<View>`** want to become i responder and asking to this **`<View>`** to release its responser. Returning true allows it release.

```ts
({ nativeEvent: PressEvent }) => boolean;
```

#### Others

##### 1. `pointerEvent`

- Check whether the **`<View>`** can be target of touch event.

  - **`auto`:** The `View` can be target touch event.
  - **`none`:** The `View` is never the target touch event.
  - **`box-none`:** The parent `View` can never target but `SubView` can.

##### 2. `removeClippedSubViews`

> **`removeClippedSubViews`** is a performance optimization props available on scrolling content when there are many subviews, most of which are offscreen. it must be applied to a view that contains many subviews that extend outside its bound

```ts
bool;
```

##### 3. `renderToHardwareTextureAndroid`

> Whether this **`View`** should render itself (and all of its children) into a single hardware texture on the GPU.

```ts
bool;
```

##### 4. `role`

##### 5. [`style`](https://reactnative.dev/docs/view-style-props)

##### 6. `tabIndex`

> Whether the **`<View>`** should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

- **`0`** - View is focusable.
- **`-1`** - View is not focusable.

##### 7. `testID`
