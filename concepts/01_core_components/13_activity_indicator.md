# ActivityIndicator

> It is used to show circular loading indicator.

## Example

```ts
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TActivityIndicator() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size={"large"} />
        <ActivityIndicator size={"small"} color="#0000ff" />
        <ActivityIndicator size={"large"} color="#00ff00" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
```

## Props

- **💀 Note:** It inherits from [**`ViewProps`**](./02_view.md/#props).

### 1. **`animating`**

- **`false`**, whether you can to hide, by default **`true`**

| Type       |
| ---------- |
| **`bool`** |

### 2. **`color`**

- The `color` of the spinner.

| Type        |
| ----------- |
| **`color`** |

### 3. **`size`**

- Size of the indicator

| Type                         |
| ---------------------------- |
| **`enum('small', 'large')`** |
