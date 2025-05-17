# Input in React Native

> It is the fundamental components for getting text from user via a keyboard. Input props provides several features such as **`auto-correction`**, **`auto-capitalization`**, **`placeholder text`**, and different keyboard types, such as a **`numeric keypad`**.

- Their are some basic props methods such as **`onChangeText`** (Occurs during typing anything), **`onSubmittingEditing`** (Occurs when enter after typing) and some web like methods such as **`.focus()`** and **`.blur()`**
- Like in web we have **`textarea`** but this feature can enable with in **`TextInput`** by **`multiline={true/false}`**. After enabling it will unlock some other props such as **`borderBottomColor`**, **`borderLeftWidth`** etc.
- **Note**: Performing text selection on input can change app activity to prevent this we have specify configuration on **`AndroidManifest.xml`** by default we have **`windowSoftInputMode`** = **`adjustResize`**. See from [here](https://developer.android.com/guide/topics/manifest/activity-element.html)

- [Input in React Native](#input-in-react-native)
  - [`TextInput`](#textinput)

## `TextInput`

```ts
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TInput() {
  const [text, setText] = useState("Useless Text");
  const [multilineText, setMultilineText] = useState(
    "TextInput has a border at the bottom of its view by default. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent."
  );

  return (
    <SafeAreaProvider style={{ padding: 8 }}>
      <SafeAreaView>
        <TextInput
          style={style.input}
          placeholder="Enter text"
          value={text}
          onChangeText={(t) => setText(t)}
          onSubmitEditing={() =>
            Alert.alert("Submitting...", "Input text is going to submit.")
          }
        />
        <Text>
          {"\n"}
          {"\n"}
          Multiline InputText
        </Text>
        <TextInput
          value={multilineText}
          editable
          multiline
          onChangeText={(t) => setMultilineText(t)}
          placeholder="Multiline input text"
          style={style.textInput}
          numberOfLines={20}
          maxLength={400}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 12,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    marginTop: 8,
  },
});
```

## Props

- **🧠 Note:** It also inherits form view.

### Important

#### 9. `value`

#### 1. `defaultValue`

#### 9. `editable`

#### 9. `inputMode`

#### 9. `keyboardType`

#### 9. `maxLength`

#### 9. `multiline`

#### 9. `numberOfLines`

#### 9. `placeholder`

#### 9. `placeHolderTextColor`

#### 9. `readOnly`

#### 9. `secureEntry`

#### 9. `selection`

#### 9. `selectionColor`

#### 9. `selectionHandleColor`

#### 9. `selectTextOnFocus`

#### 9. `spellCheck` -- IOS

#### 9. `submitBehavior`

#### 9. `textAlign`

#### 9. `textContentType`

#### 9. `passwordRules` -- IOS

#### 9. `textBreakStrategy` -- Android

#### 9. `underlineColorAndroid`

### Events

#### 1. `onBlur`

#### 9. `onChange`

#### 9. `onChangeText`

#### 9. `onContentSizeChange`

#### 9. `onEndEditing`

#### 9. `onPressIn`

#### 9. `onPressOut`

#### 9. `onFocus`

#### 9. `onKeyPress`

#### 9. `onScroll`

#### 9. `onSubmitEnter`

### Others

#### 1. `allowFontScaling`

#### 2. `allowFontScaling`

#### 3. `autoComplete`

#### 3. `autoCorrect`

#### 4. `autoFocus`

#### 5. `caretHidden`

#### 6. `contextMenuHidden`

#### 7. `cursorColor`

#### 8. `disableFullscreenUI`

#### 9. `enterKeyHint`

#### 10. `importantForAutofill` -- Android

#### 10. `inlineImageLeft` -- Android

#### 11. `inlineImagePadding` -- Android

#### 12. `keyboardAppearance` -- IOS

#### 13. `maxFontSizeMultiplier`

#### 13. `returnKeyLabel`

#### 13. `returnKeyType`

### Method

#### 13. `.focus()`

#### 13. `.blur()`

#### 13. `.clear()`

#### 13. `.isFocused()`
