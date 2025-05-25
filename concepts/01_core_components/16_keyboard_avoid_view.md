# KeyboardAvoidingView in React Native

> The **`KeyboardAvoidView`** component will automatically adjust the **`height`**, **`position`** or **`button`** padding based on the keyboard height to remain visible while the virtual keyboard displayed.

## Example

```ts
import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function TKeyboardAvoidView() {
  const [userName, setUsername] = useState("");

  const handleTextInput = () => {
    Alert.alert("Input", `Your input is ${userName}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.outerContainer}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {/* Header */}
          <Text style={styles.header}>Header</Text>

          {/* Input */}
          <TextInput
            style={styles.inputStyle}
            value={userName}
            onChangeText={(t) => setUsername(t)}
            placeholder="Enter username"
          />

          {/* Button */}
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handleTextInput} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  inputStyle: {
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 600,
  },
  btnContainer: {
    marginTop: 12,
  },
});
```

## Props

- **💀 Note:** It also inherits from [**`ViewProps`**](./02_view.md/#props).

### Important

#### 1. `behavior`

- Specify how react when keyboard is shown.

| Type                                        |
| ------------------------------------------- |
| enum(`'height'`, `'position'`, `'padding'`) |

#### 2. `contentContainerStyle`

- The style of the content container (View) when behavior is **`position`**.

#### 3. `enabled`

- Enabled or disabled the **`KeyboardAvoidingView`**.

| Type    | Default |
| ------- | ------- |
| boolean | `true`  |

#### 4. `keyboardVerticalOffset`
