- [Text in React Native](#text-in-react-native)
  - [Containers](#containers)
  - [Limited Style Inheritance](#limited-style-inheritance)
  - [Props](#props)
    - [Accessibility](#accessibility)
    - [Events](#events)
      - [1. **`onPress`**](#1-onpress)
      - [2. **`onPressIn`**](#2-onpressin)
      - [3. **`onPressOut`**](#3-onpressout)
    - [Others](#others)
      - [1. `selectable` - `bool`](#1-selectable---bool)
      - [2. `selectionColor` - `string` -- Android](#2-selectioncolor---string----android)
      - [3. `style`](#3-style)
      - [4. `textBreakStrategy` -- Android](#4-textbreakstrategy----android)
      - [5. `lineBreakStrategyIOS` -- IOS](#5-linebreakstrategyios----ios)

# Text in React Native

> It is a React native component to displaying text.It is support nesting, styling and touch handling.

- In the following example, We saw both **`baseText`** and **`titleText`** are inherit the **`fontFamily`** from **`style.baseText`** that way we see both have same fontFamily, but in addition title provides its own style.

```js
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TText() {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const handleOnPressed = () => {
    setTitleText("Bird's Nest [Pressed]");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <Text style={style.baseText}>
          <Text style={style.titleText} onPress={handleOnPressed}>
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: "Cochin",
    color: "blue",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
```

- In both **Android** and **IOS** allows us to format the range of string (using index) with specific format such as bold, or colored text.

  - In **Android** we use **`SpannableString`**.

    ```java
    TextView textView = findViewById(R.id.textView);

    SpannableString spannable = new SpannableString("Hello World");

    // Apply red color to "Hello"
    spannable.setSpan(
        new ForegroundColorSpan(Color.RED),
        0, 5, // start, end (exclusive)
        Spanned.SPAN_EXCLUSIVE_EXCLUSIVE
    );

    // Apply bold style to "Hello"
    spannable.setSpan(
        new StyleSpan(Typeface.BOLD),
        0, 5,
        Spanned.SPAN_EXCLUSIVE_EXCLUSIVE
    );

    textView.setText(spannable);
    ```

  - In **IOS** we use **`NSAttributedString`**.

    ```swift
    import UIKit
    let label = UILabel()

    let fullText = "Hello World"
    let attributedString = NSMutableAttributedString(string: fullText)

    // Apply red color and bold font to "Hello"
    let helloRange = NSRange(location: 0, length: 5)

    attributedString.addAttribute(.foregroundColor, value: UIColor.red, range: helloRange)
    attributedString.addAttribute(.font, value: UIFont.boldSystemFont(ofSize: 17), range: helloRange)

    label.attributedText = attributedString
    ```

- But React Native choose Web like paradigm, where we can format text by using nesting as shown in the example.

```js
<Text style={style.boldText}>
  I am bold <Text style={style.redText}>and red</Text>
</Text>;

// StyleSheet
const style = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
  },
  redText: {
    color: "red",
  },
});
```

- Behind the scenes, React native convert this to a flat **`NSAttributedString`** or **`SpannableString`** that contains the following information.

```shell
"I am bold and red"
0-9: bold
9-17: bold, red
```

## Containers

> The **`<Text>`** element is unique related to layout. Typically layout is controlled by **Flex** but in **`Text`**, It is controlled by **text layout**. The means the element inside the text is not longer rectangle.

```js
<Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>
// Text container: the text will be inline, if the space allows it
// |First part and second part|

// otherwise, the text will flow as if it was one
// |First part |
// |and second |
// |part       |

<View>
  <Text>First part and </Text>
  <Text>second part</Text>
</View>
// View container: each text is its own block
// |First part and|
// |second part   |

// otherwise, the text will flow in its own block
// |First part |
// |and        |
// |second part|
```

## Limited Style Inheritance

> On the web, we can set fontSize, fontFamily on the root element to they can inherit from children element but in react native it can't happen. In html we can set more than on **`font-family`** Meanwhile, **`fontFamily`** only accept only single font name. The recommended way to use same font-name across application is use custom component **`MyAppText`**.

- Here we have most strict about it, **you must wrap all text inside of a `<Text>` Component**. You cannot directly put text node directly to a **`<View>`** component.

```js
// ⚠️ BAD: will raise exception, can't have a text node as child of a <View>
<View>
  Some text
</View>

// 👍🏻 GOOD
<View>
  <Text>
    Some text
  </Text>
</View>
```

- **Custom Text Component `MyAppText`**

  ```js
  <View>
    <MyAppText>
      Text styled with the default font for the entire application
    </MyAppText>
    <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
  </View>
  ```

- Assuming that MyAppText is a component that only renders out its children into a Text component with styling, then MyAppHeaderText can be defined as follows:

  ```js
  const MyAppHeaderText = ({ children }) => {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>{children}</Text>
      </MyAppText>
    );
  };
  ```

## Props

### Accessibility

### Events

- All Press event will have same type `({nativeEvent: PressEvent}) => void`

#### 1. **`onPress`**

- Function called on user press

#### 2. **`onPressIn`**

- Function called immediately when touch is happen.

#### 3. **`onPressOut`**

- Function called immediately when touch out.

### Others

#### 1. `selectable` - `bool`

- **`Enable`** or **`Disable`** copy and paste functionality.

#### 2. `selectionColor` - `string` -- Android

- The highlight color during selection

#### 3. [`style`](https://reactnative.dev/docs/text-style-props)

#### 4. `textBreakStrategy` -- Android

- Property used with **`<Text>`** component in React Native to control how text wraps across multiple lines.

| Type                                      | Default     |
| ----------------------------------------- | ----------- |
| enum('simple', 'highQuality', 'balanced') | highQuality |

#### 5. `lineBreakStrategyIOS` -- IOS

- Same as `textBreakStrategy` but for **IOS**

| Type                                                | Default |
| --------------------------------------------------- | ------- |
| enum('none', 'standard', 'hangul-word', 'push-out') | 'none'  |
