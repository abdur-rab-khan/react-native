# FlatList in React native

> A performant interface for rendering basic, flat lists, supports most handy features.

- Fully cross-platform.
- Optional horizontal mode.
- Configurable viewable callbacks.
- Header support
- Footer support
- Separator support
- Pull to refresh
- Scroll loading
- Scroll to index support
- Multiple column support

- It needs section support see [**`<SectionList>`**](./09_sectionlist.md)

## Example

```ts
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

interface ItemData {
  id: string;
  title: string;
}

const Item = ({ backgroundColor, item, onPress, textColor }: ItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

interface ItemProps {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

export default function TFlatList() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItems = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "violet" : "lightpink";
    const textColor = item.id === selectedId ? "white" : "black";

    console.log(id);

    return (
      <Item
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
        item={item}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={DATA}
          // renderItem={({ item }) => <Items title={item.title} />}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 12,
    flexDirection: "column",
    gap: 10,
  },
  item: {
    height: 100,
    padding: 18,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  title: {
    fontSize: 18,
  },
});
```

- By passing **`extraData={selectedId}`** to **`FlatList`**, We make sure **`FlatList`** re-render when state changes. It is highly optimized to does not re-render all items by default.
- **`keyExtractor`** tells the list to use the ids for the react keys instead of the default key property.

- **💀 Note:**
  - Internal data is not preserved when content scroll out of the render window, So we have to capture data in the item data or external stores like redux or other.
    - After scroll out of the window it wipeout from the memory for better performance.
  - It is a **`PureComponent`** which is not re-render if **`props`** remains shallow-equal (means if reference of previous and updated state is equal).
  - Make sure that re-rendering happens when any value used inside the **`renderItem`** function changes. This includes changes to the data array or any external values passed via the extraData prop. Otherwise, FlatList may not update the UI.
  - To constrain memory and enable smooth scrolling, we have to render content asynchronously.
    - It only render items that are visible -- this is called a **`windowed rendering`** approach.
    - This saves **`memory`** and improve scrolling performance, especially with large lists.
    - Items are rendered asynchronously in the background, not all immediately on the main thread.
  - If the user scrolls very fast, and rendering is happening in the background (async), it can cause **"blank spaces"** -- bcz the next items haven't finished rendering yet.

## Props

### Important

#### 1. **`renderItem`**

```ts
renderItem({
  item: ItemT,
  index: number,
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  }
}): JSX.Element;
```

- Takes an item from **`data`** and render it into the list.

#### 2. **`data`**

- An array of items to render it.

| Type      |
| --------- |
| ArrayLike |

#### 3. **`ItemSeparatorComponent`**

- Rendered in between each item, but not at the top or bottom. By default, **`highlighted`** and **`leadingItem`** props are provided.

#### 4. **`ListEmptyComponent`**

- A Component which are provided to render when list is empty.

#### 5. **`ListFooterComponent`**

#### 6. **`ListFooterComponentStyle`**

#### 7. **`ListHeaderComponent`**

#### 8. **`ListHeaderComponentStyle`**

#### 9. **`extraData`**

- A marker property for telling the list to re-render. If any of our **`renderItem`**, Header, Footer, etc. functions depend on anything outside of the **`data`** prop.

#### 10. **`initialNumToRender`**

- It decides how many items to render in the initial batch. You have to make sure it should be enough to fill the screen but not much more.

#### 12. **`initialScrollIndex`**

#### 13. **`keyExtractor`**

- Used to extract a unique key for a given item at the specified index. these keys are used for caching and as the react key to track item re-ordering.

#### 14. **`progressViewOffset`**

- It will set when offset is needed for the loading indicator to show correctly.

| Type   |
| ------ |
| number |

#### 15. **`refreshing`**

- Set this true while waiting for nw data from a refresh.

### Others

#### 1. **`getItemLayout`**

#### 2. **`horizontal`**

### Events

#### 1. **`onRefresh`**

- It will work when provided, a standard **`RefreshControl`** it enables "Pull to Refresh" functionality.

#### 2. **`scrollToEnd()`**

#### 3. **`scrollToIndex()`**

#### 4. **`scrollToItem()`**

#### 5. **`scrollToOffset()`**
