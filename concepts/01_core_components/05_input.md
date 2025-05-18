# Input in React Native

> It is the fundamental components for getting text from user via a keyboard. Input props provides several features such as **`auto-correction`**, **`auto-capitalization`**, **`placeholder text`**, and different keyboard types, such as a **`numeric keypad`**.

- Their are some basic props methods such as **`onChangeText`** (Occurs during typing anything), **`onSubmittingEditing`** (Occurs when enter after typing) and some web like methods such as **`.focus()`** and **`.blur()`**
- Like in web we have **`textarea`** but this feature can enable with in **`TextInput`** by **`multiline={true/false}`**. After enabling it will unlock some other props such as **`borderBottomColor`**, **`borderLeftWidth`** etc.
- **Note**: Performing text selection on input can change app activity to prevent this we have specify configuration on **`AndroidManifest.xml`** by default we have **`windowSoftInputMode`** = **`adjustResize`**. See from [here](https://developer.android.com/guide/topics/manifest/activity-element.html)

- [Input in React Native](#input-in-react-native)
  - [`TextInput`](#textinput)
  - [Props](#props)
    - [Important](#important)
      - [9. `value`](#9-value)
      - [1. `defaultValue`](#1-defaultvalue)
      - [9. `editable`](#9-editable)
      - [9. `inputMode`](#9-inputmode)
      - [9. `keyboardType`](#9-keyboardtype)
      - [9. `maxLength`](#9-maxlength)
      - [9. `multiline`](#9-multiline)
      - [9. `numberOfLines`](#9-numberoflines)
      - [9. `placeholder`](#9-placeholder)
      - [9. `placeHolderTextColor`](#9-placeholdertextcolor)
      - [9. `readOnly`](#9-readonly)
      - [9. `secureEntry`](#9-secureentry)
      - [9. `selection`](#9-selection)
      - [9. `selectionColor`](#9-selectioncolor)
      - [9. `selectionHandleColor`](#9-selectionhandlecolor)
      - [9. `selectTextOnFocus`](#9-selecttextonfocus)
      - [9. `spellCheck` -- IOS](#9-spellcheck----ios)
      - [9. `submitBehavior`](#9-submitbehavior)
      - [9. `textAlign`](#9-textalign)
      - [9. `textContentType`](#9-textcontenttype)
      - [9. `passwordRules` -- IOS](#9-passwordrules----ios)
      - [9. `textBreakStrategy` -- Android](#9-textbreakstrategy----android)
      - [9. `underlineColorAndroid`](#9-underlinecolorandroid)
    - [Events](#events)
      - [1. `onBlur`](#1-onblur)
      - [9. `onChange`](#9-onchange)
      - [9. `onChangeText`](#9-onchangetext)
      - [9. `onContentSizeChange`](#9-oncontentsizechange)
      - [9. `onEndEditing`](#9-onendediting)
      - [9. `onPressIn`](#9-onpressin)
      - [9. `onPressOut`](#9-onpressout)
      - [9. `onFocus`](#9-onfocus)
      - [9. `onKeyPress`](#9-onkeypress)
      - [9. `onScroll`](#9-onscroll)
      - [9. `onSubmitEnter`](#9-onsubmitenter)
    - [Others](#others)
      - [1. `allowFontScaling`](#1-allowfontscaling)
      - [2. `allowFontScaling`](#2-allowfontscaling)
      - [3. `autoComplete`](#3-autocomplete)
      - [3. `autoCorrect`](#3-autocorrect)
      - [4. `autoFocus`](#4-autofocus)
      - [5. `caretHidden`](#5-carethidden)
      - [6. `contextMenuHidden`](#6-contextmenuhidden)
      - [7. `cursorColor`](#7-cursorcolor)
      - [8. `disableFullscreenUI`](#8-disablefullscreenui)
      - [9. `enterKeyHint`](#9-enterkeyhint)
      - [10. `importantForAutofill` -- Android](#10-importantforautofill----android)
      - [10. `inlineImageLeft` -- Android](#10-inlineimageleft----android)
      - [11. `inlineImagePadding` -- Android](#11-inlineimagepadding----android)
      - [12. `keyboardAppearance` -- IOS](#12-keyboardappearance----ios)
      - [13. `maxFontSizeMultiplier`](#13-maxfontsizemultiplier)
      - [13. `returnKeyLabel`](#13-returnkeylabel)
      - [13. `returnKeyType`](#13-returnkeytype)
    - [Method](#method)
      - [13. `.focus()`](#13-focus)
      - [13. `.blur()`](#13-blur)
      - [13. `.clear()`](#13-clear)
      - [13. `.isFocused()`](#13-isfocused)

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

#### 1. `value`

- It is the text value which is show into the **`TextInput`** you change them as well.

#### 2. `defaultValue`

- **`defaultValue`** is a props in **`TextInput`** that is used to show the default text into the input

#### 3. `editable`

- **`editable`** using this you can prevent to change into the input, In some cases you does not want to allow user to change.

#### 4. `inputMode`

- Same as in web, It determines which keyboard mode we have to show such as **`numberic`** (It allow to write only number), there are many more.
- Mostly use for web.

- Supports the following types:
  1. `none`
  2. `text`
  3. `decimal`
  4. `numeric`
  5. `tel`
  6. `search`
  7. `email`
  8. `url`

#### 5. `keyboardType`

- It is same as above to determine which keyboard we have to show it.

- Support the following types:

  1. `default`
  2. `number-pad`
  3. `decimal-pad`
  4. `numeric`
  5. `email-address`
  6. `phone-pad`
  7. `url`

- IOS - ONLY

  1. `ascii-capable`
  2. `numbers-and-punctuation`
  3. `name-phone-pad`
  4. `twitter`
  5. `web-search`

- Android - ONLY
  1. `visible-password`

#### 6. `maxLength`

#### 7. `multiline`

- **`true`**, If you want to make input box similar like textArea in html.

#### 8. `numberOfLines`

#### 9. `placeholder`

#### 10. `placeHolderTextColor`

#### 11. `readOnly`

#### 12. `secureEntry`

- **`true`**, If you want to hide the text that want add into the input. It is useful when you want to add password.

#### 13. `selection`

#### 14. `selectionColor`

#### 15. `selectionHandleColor`

#### 16. `selectTextOnFocus`

#### 17. `spellCheck` -- IOS

#### 18. `submitBehavior`

#### 19. `textAlign`

#### 20. `textContentType` -- IOS

#### 21. `passwordRules` -- IOS

#### 22. `textBreakStrategy` -- Android

#### 23. `underlineColorAndroid`

### Events

#### 1. `onBlur`

- The **`callback`** function will call when you get-out directly from the input.

#### 2. `onChange`

- **`callback`** function will call when text input text changes.

#### 3. `onChangeText`

- **`callback`** function will call when text input text changes. It will return single string from the callback.

#### 4. `onContentSizeChange`

#### 5. `onEndEditing`

#### 6. `onPressIn`

#### 7. `onPressOut`

#### 8. `onFocus`

#### 9. `onKeyPress`

#### 10. `onScroll`

#### 11. `onSubmitEnter`

### Others

#### 1. `allowFontScaling`

#### 2. `allowFontScaling`

#### 3. `autoComplete`

#### 4. `autoCorrect`

#### 5. `autoFocus`

#### 6. `caretHidden`

#### 7. `contextMenuHidden`

#### 8. `cursorColor`

#### 9. `disableFullscreenUI`

#### 10. `enterKeyHint`

#### 11. `importantForAutofill` -- Android

#### 12. `inlineImageLeft` -- Android

#### 13. `inlineImagePadding` -- Android

#### 14. `keyboardAppearance` -- IOS

#### 15. `maxFontSizeMultiplier`

#### 16. `returnKeyLabel`

#### 17. `returnKeyType`

### Method

#### 1. `.focus()`

#### 2. `.blur()`

#### 3. `.clear()`

#### 4. `.isFocused()`
