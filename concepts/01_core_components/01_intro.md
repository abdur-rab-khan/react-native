# Core Components and Native Components

> React Native is an **open source** library to build _android_, _ios_, _web_ application using react js. React JS use to build appearance and UI of the application, Javascript/Typescript to implement native compatibilities.

## View and mobile development

In both _android_ and _ios_. View is the building block of our application, It is small rectangle on the screen that can be use to display text, image, response to user, line of text or button. Some views can also contain nested views. Views are same as **_div_** in web development.

![views](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

## Native Components

- In Android or IOS both have different Views, And Implementation of the views in both are different Kotlin are use for Android or Swift or Objective C of IOS.
- In React Native we use React Component **`<View />`** to implement for both IOS or Android.
- React Native automatically create corresponding views and they are backed by both Android and IOS.
- We call these backed platform-backed components as **Native Components**.
- We have bunch of pre-defined component build by the community [here](https://reactnative.directory/).

## Core Components

React Native have many core components to build full-fledged application. Following are the important and frequently used components:
| React Native UI Component | Android View | iOS View | Web Analog | Description |
| --- | --- | --- | --- | --- |
| `<View>` | `<ViewGroup>` | `<UIView>` | A non-scrolling `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>` | `<TextView>` | `<UITextView>` | `<p>` | Displays, styles, and nests strings of text and even handles touch events |
| `<Image>` | `<ImageView>` | `<UIImageView>` | `<img>` | Displays different types of images |
| `<ScrollView>` | `<ScrollView>` | `<UIScrollView>` | `<div>` | A generic scrolling container that can contain multiple components and views |
| `<TextInput>` | `<EditText>` | `<UITextField>` | `<input type="text">` | Allows the user to enter text |

- **Example**

  ```js
  import React from "react";
  import { View, Text, Image, ScrollView, TextInput } from "react-native";

  const App = () => {
    return (
      <ScrollView>
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>
    );
  };

  export default App;
  ```

- React Native use the same API structured as React components. We will need to understand React Component API to get started.

![react-components](https://reactnative.dev/docs/assets/diagram_react-native-components_dark.svg)
