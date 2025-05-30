# PermissionsAndroid in React Native

> **`PermissionsAndroid`** provides access to grant new permissions that has been not granted when application installed. Some **"normal"** permissions are granted by default when application installed. However, **"dangerous"** permissions such as **camera**, **file access** requires a dialog prompt.

- In previous versions permissions are automatically granted if they appear in the **`manifest`**.
- First time when grant any permissions (suppose **"camera"**) and user deny than second time -- The OS expects your app to give a brief explanation -- or rationale -- before asking again.

- [PermissionsAndroid in React Native](#permissionsandroid-in-react-native)
  - [Permissions with Expo](#permissions-with-expo)
    - [Android](#android)

## Permissions with Expo

- **💀 Note:** These permissions are not required when testing project in the **`Expo Go`** app.

### Android

- Permissions are configured with the **`android.permissions`** and **`android.blockedPermissions`** key in our **`app.json`**.
- Most Permissions are automatically added by the libraries that we use in our app either with **`config plugin`** or with a package-level **`AndroidManifest.xml`**.

```json
// app.json
{
  "android": {
    "permissions": ["android.permission.SCHEDULE_EXACT_ALARM"]
  }
}
```

- The way to remove permissions that are added by package-level **`AndroidManifest.xml`** files is to block them with **`android.blockedPermissions`**.
- If we want to remove the audio recording permissions added by `expo.av`

```json
// app.json
{
  "android": {
    "blockedPermissions": ["android.permission.RECORD_AUDIO"]
  }
}
```

#### Example

```ts
import React from "react";
import { Alert, Button, PermissionsAndroid, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const requestCameraPermissions = async () => {
  try {
    const isAlreadyGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );

    if (isAlreadyGranted) {
      console.log("Permission has been already granted.");
      return;
    }

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        //  This is rationale
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera so you can take awesome pictures",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera Permission denied");
    }
  } catch (err: any) {
    Alert.alert(err.message);
  }
};

export default function TPermissions() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Button
          title="Grant Camera Permission"
          onPress={requestCameraPermissions}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

## Methods

### 1. `check()`

- Returns a promise **`resolving`** to a boolean value as to whether the specified permissions has been already granted or not.

| Name       | Type     | Required |
| ---------- | -------- | -------- |
| permission | `string` | Yes      |

### 2. `request()`

- Request permissions from a user by showing a pop-up dialog explaining the reason.
- Returns a promise that resolves to a string value indicating whether the user accepted or denied the request.

| Name       | Type     | Required | Description               |
| ---------- | -------- | -------- | ------------------------- |
| permission | `string` | Yes      | The permission to request |
| rationale  | `object` | No       | See rationale below       |

**Rationale:**

| Name           | Type     | Required | Description                     |
| -------------- | -------- | -------- | ------------------------------- |
| title          | `string` | Yes      | The title of the dialog         |
| message        | `string` | Yes      | The message of the dialog       |
| buttonPositive | `string` | Yes      | The text of the positive button |
| buttonNegative | `string` | No       | The text of the negative button |
| buttonNeutral  | `string` | No       | The text of the neutral button  |

### 3. `requestMultiple()`
