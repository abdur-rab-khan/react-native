# Refresh Control in React Native

> This component is used to on **`ScrollView`** or **`ListView`** to add pull to refresh functionality. On refresh will trigger an **`onRefresh`** event.

## Example

```ts
import React, { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Item = ({ index }) => (
  <View style={styles.item}>
    <Text style={styles.indexText}>{index}</Text>
  </View>
);

export default function TRefreshControl() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollStyle}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {Array.from(Array(20)).map((_, index) => (
            <Item key={index} index={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "lightpink",
    padding: 22,
    borderRadius: 12,
  },
  indexText: {
    fontSize: 18,
  },
  scrollStyle: {
    marginHorizontal: 8,
    flexDirection: "column",
    gap: 12,
  },
});
```

## Props

- **💀 Note:** It also inherits from [**`ViewProps`**](./02_view.md/#props).

### 1. **`refreshing`**

- **`true`**, Whether determine refresh is active (getting loading bar at the top).

| Type      |
| --------- |
| `boolean` |

### 2. **`colors`** -- Android

- **`array of colors`**, for loading bar during refreshing.

| Type              |
| ----------------- |
| `array of colors` |

### 3. **`enabled`** -- Android

- **`true`**, Determines the pull refresh functionality is enabled or not.

| Type      | default |
| --------- | ------- |
| `boolean` | `true`  |

### 4. **`onRefresh`**

- **`callback`** event that called when pull refresh is occurs.

| Type      |
| --------- |
| `boolean` |

### 5. **`progressBackgroundColor`**

- **color** of the progress background.

| Type    |
| ------- |
| `color` |

### 6. **`progressOffset`**

- The offset position of progress bar.

| Type     | default |
| -------- | ------- |
| `number` | `0`     |

### 7. **`size`** - Android

- Size of the refresh indicator

| Type                       |
| -------------------------- |
| `enum('default', 'large')` |
