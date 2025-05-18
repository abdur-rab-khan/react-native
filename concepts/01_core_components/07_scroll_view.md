# ScrollView in React Native

> It is build on the top of **`ScrollView`** provided by the mobile platform (iOS/Android) to implement, it handles gestures using the **responder system** it can local touch control during scrolling and prevents other components from accidentally hijacking scroll gestures.

- [ScrollView in React Native](#scrollview-in-react-native)
  - [Example](#example)
  - [Props](#props)

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

## Props
