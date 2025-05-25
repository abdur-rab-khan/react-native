# ScrollView in React Native

> It is build on the top of **`ScrollView`** provided by the mobile platform (iOS/Android) to implement, it handles gestures using the **responder system** it can local touch control during scrolling and prevents other components from accidentally hijacking scroll gestures.

- [ScrollView in React Native](#scrollview-in-react-native)
  - [Example](#example)
  - [Props](#props)
    - [Important](#important)
      - [1. `StickyHeaderComponent`](#1-stickyheadercomponent)
      - [2. `alwaysBounceHorizontal / alwaysBounceVertical` -- IOS](#2-alwaysbouncehorizontal--alwaysbouncevertical----ios)
      - [3. `contentContainerStyle`](#3-contentcontainerstyle)
      - [4. `contentOffset`](#4-contentoffset)
      - [5. `decelerationRate`](#5-decelerationrate)
      - [6. `disableIntervalMomentum`](#6-disableintervalmomentum)
      - [7. `disableScrollViewPanResponder`](#7-disablescrollviewpanresponder)
      - [8. `endFillColor` -- Android](#8-endfillcolor----android)
      - [9. `fadingEdgeLength` -- Android](#9-fadingedgelength----android)
      - [10. `horizontal`](#10-horizontal)
      - [11. `keyboardDismissMode`](#11-keyboarddismissmode)
      - [12. `keyboardShouldPersistTaps`](#12-keyboardshouldpersisttaps)
      - [13. `maintainVisibleContentPosition`](#13-maintainvisiblecontentposition)
      - [14. `nestedScrollEnabled` -- Android](#14-nestedscrollenabled----android)
      - [15. `pagingEnables`](#15-pagingenables)
      - [16. `refreshControl`](#16-refreshcontrol)
    - [Events](#events)
      - [1. `onContentSizeChange`](#1-oncontentsizechange)
      - [2. `onMomentumScrollBegin`](#2-onmomentumscrollbegin)
      - [3. `onMomentumScrollEnd`](#3-onmomentumscrollend)
      - [4. `onScroll`](#4-onscroll)
      - [5. `onScrollBeginDrag`](#5-onscrollbegindrag)
      - [6. `onScrollEndDrag`](#6-onscrollenddrag)
      - [7. `overScrollMode` -- Android](#7-overscrollmode----android)
    - [Others](#others)
      - [1. `removeClippedSubviews`](#1-removeclippedsubviews)
      - [2. `scrollEnabled`](#2-scrollenabled)
      - [3. `scrollEventThrottle`](#3-scrolleventthrottle)
      - [4. `snapToAlignment`](#4-snaptoalignment)
      - [5. `snapToEnd`](#5-snaptoend)
      - [6. `snapToStart`](#6-snaptostart)
      - [7. `stickyHeaderHiddenOnScroll`](#7-stickyheaderhiddenonscroll)
      - [8. `stickyHeaderIndices`](#8-stickyheaderindices)
    - [Methods](#methods)
      - [1. `flashScrollIndicators()`](#1-flashscrollindicators)
      - [2. `scrollTo()`](#2-scrollto)
      - [3. `scrollToEnd()`](#3-scrolltoend)

## Example

```ts
import React from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TScrollView() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello world</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ flexDirection: "column", flex: 1 }}
      >
        {Array.from(new Array(20)).map((_, i) => (
          <View key={i} style={[styles.card, { marginBottom: 8 }]} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: "lightblue",
  },
});
```

- It comes with some limitation, such as it renders their **`child`** as once that make performance downside.
- To solve this problem we can [**`<FlatList>`**](./08_flatlist.md).

- **💀 Note**: It also inherits [**`<View>`**](./02_view.md) props.

## Props

### Important

#### 1. `StickyHeaderComponent`

- It is used to render sticky headers along with items list, should have to use [**`StickyHeaderIndices`**](#8-stickyheaderindices) with them when you want to dock at the top of the item.

```ts
<ScrollView
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
  stickyHeaderIndices={[0]}
  style={{ flexDirection: "column", flex: 1 }}
>
  <View>
    <Input />
  </View>

  {Array.from(new Array(20)).map((_, i) => (
    <View key={i} style={[styles.card, { marginBottom: 8 }]} />
  ))}
</ScrollView>
```

#### 2. `alwaysBounceHorizontal / alwaysBounceVertical` -- IOS

#### 3. `contentContainerStyle`

- These style applied on scroll view content container which warps all items.

| Type                                       |
| ------------------------------------------ |
| [**`View Style`**](../02_style/01_view.md) |

#### 4. `contentOffset`

- Manually set the starting scroll offset.

| Type   | Default           |
| ------ | ----------------- |
| Points | **`{x: 0, y:0}`** |

#### 5. `decelerationRate`

- A Floating point number that determine how fast the scroll view slow down when user lifts there finger.

| Type                                               | Default |
| -------------------------------------------------- | ------- |
| **`enum('normal', 'fast', number (from 0 to 1))`** | normal  |

#### 6. `disableIntervalMomentum`

#### 7. `disableScrollViewPanResponder`

#### 8. `endFillColor` -- Android

#### 9. `fadingEdgeLength` -- Android

- Fade out the edge of the scroll content.

#### 10. `horizontal`

#### 11. `keyboardDismissMode`

- It determines whether the keyboard get dismissed in the response to drag.

1. **`none`**: drags do not dismiss the keyboard.
2. **`on-drag`** the keyboard get dismissed when a drag begins.

#### 12. `keyboardShouldPersistTaps`

- Determines when keyboard should stay visible after tap.

1. **`never`**:

2. **`always`**

3. **`handled`**

#### 13. `maintainVisibleContentPosition`

#### 14. `nestedScrollEnabled` -- Android

#### 15. `pagingEnables`

#### 16. `refreshControl`

### Events

#### 1. `onContentSizeChange`

#### 2. `onMomentumScrollBegin`

- Called when the momentum scroll start (occurs when user left finger from the screen after scrolling).

#### 3. `onMomentumScrollEnd`

- Called when the momentum scroll end (occurs when the scroll momentum end)

#### 4. `onScroll`

#### 5. `onScrollBeginDrag`

#### 6. `onScrollEndDrag`

#### 7. `overScrollMode` -- Android

### Others

#### 1. `removeClippedSubviews`

#### 2. `scrollEnabled`

- Enables nested scroll for Android

| Type          |
| ------------- |
| **`boolean`** |

#### 3. `scrollEventThrottle`

- Specify the number of **`scroll`** event fire while scrolling, specified as a time interval in ms.

| Type         | Default |
| ------------ | ------- |
| **`number`** | 0       |

#### 4. `snapToAlignment`

#### 5. `snapToEnd`

#### 6. `snapToStart`

#### 7. `stickyHeaderHiddenOnScroll`

#### 8. `stickyHeaderIndices`

- It determine which child get docked to the top of the screen during scrolling.
- **`stickyHeaderIndices={[0]}`** will cause the first child get docked at the top during scrolling.

| Type             |
| ---------------- |
| array of numbers |

### Methods

#### 1. `flashScrollIndicators()`

#### 2. `scrollTo()`

#### 3. `scrollToEnd()`
