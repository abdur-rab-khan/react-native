# Linking in React Native

> **`Linking`** provides a interface to interact with both incoming and outgoing app links.

- [Linking in React Native](#linking-in-react-native)

  - [Enabling Deep Links for Expo](#enabling-deep-links-for-expo)
    - [Add `intentFilters` to the app config](#add-intentfilters-to-the-app-config)

- Every Link (URL) has a URL Schema, Let's see them:

  - Websites URL start with a prefix such as **`https://`** or **`http://`** and the **`htpp`**.
  - To Open a link with the mail schema. We use **`mailto`** schema, After Opening our operating system will automatically open an installed mail application.
  - Like using **Web** or **Mail** Scheme, it's possible to link to other applications by using custom url schemes. - Examples - These are refered to as [deep linking](#deep-linking)
    - **Lunch Slack** button is an anchore tag with an href that looks something like: **`slack://secret/magic-login/other-secret`**.
    - To **Lunch Youtube** with href that looks something like: **`whatsapp://send?text=Hello`**.
    - **`fb://profile or fb://page/{page_id}`**.
    - **`vnd.youtube://{videoId}`**.

- A custom URL scheme is't the only way to open our application on mobile.

  - If you want to email someone a link to be opened on mobile. It could not ideal for the user that open the email on a desktop.
  - So the preferred way is to use standard **`https`** links, such as
    - **`https://www.myapp.io/records/1234546`**. On mobile, these links can be configured to open your app. On Android this featured is called **Deep Links**, **Universal Links** on iOS.
  - These **Links** provides a way to open our app and navigates directly to a specific screen or feature inside it using standard URL **`https://...`** or custom schema like **`myapp://`**.

- **Built-in URL Schemas**

  | Scheme       | Description                                  | iOS | Android |
  | ------------ | -------------------------------------------- | --- | ------- |
  | mailto       | Open mail app, eg: mailto: <support@expo.io> | ✅  | ✅      |
  | tel          | Open phone app, eg: tel:+123456789           | ✅  | ✅      |
  | sms          | Open SMS app, eg: sms:+123456789             | ✅  | ✅      |
  | https / http | Open web browser app, eg: <https://expo.io>  | ✅  | ✅      |

## Enabling Deep Links for Expo

- To configure Android App Links for our app, we need to:
  - Add **`intentFilters`** and set **`autoVerify`** to true in our project's app config.
  - Set up two-way association to verify your website and native app.

### Add `intentFilters` to the app config

- Configure you app config by adding the **`android.intentFilters`** property and setting the **`autoVerify`** attribute to **`true`**. It is required for Android App links to work correctly.

```json
{
  "expo": {
    "android": {
      "intentFilters": [
        {
          "action": "VIEW",
          "autoVerify": true,
          "data": [
            {
              "scheme": "https",
              "host": "*.webapp.io",
              "pathPrefix": "/records"
            }
          ],
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ]
    }
  }
}
```

### Set up two-way association

## Handling Deep Links

- There are two ways to handle URLs that open you app.

  - **If the app is already open in foreground and a Linking 'url' event fired**
    - You can handle these events with **`Linking.addEventListener('url', callback)`**
  - **If the app is not already open, it is opened and url is ppased in a the initialURL**
    - You can handle these events with **`Linking.getInitialURL()`**

## Open Links and Deep Links (Universal Links)

```ts
import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
```

## Get the Deep Link

```ts
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const supportedURL = "https://youtube.com";
const unsupportedURL = "https://www.myapp.io/records/1234546";

interface OpenURLButtonProps {
  url: string;
  title: string;
}

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();

      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return { url, processing };
};

export default function TLinking() {
  const { url, processing } = useInitialURL();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.viewContainer}>
        <Text>
          {"\n"}
          {processing
            ? "Processing the initial url from a deep link"
            : `The deep link is ${url || "None"}`}
        </Text>
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
  viewContainer: {
    gap: 8,
  },
});
```

## Open LInks and Deep Links (Universal Links)

```ts
import React, { useCallback, useEffect } from "react";
import { Button, Linking, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type OpenSettingsButtonProps = {
  children: string;
};

const OpenSettingsButton = ({ children }: OpenSettingsButtonProps) => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

export default function OpenCustomSettings() {
  useEffect(() => {}, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <OpenSettingsButton>Open Settings</OpenSettingsButton>
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

## Send Intents (Android)

```ts
import React from "react";
import { Alert, Button, Linking, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface SendIntendProps {
  children: string;
  action: string;
  extras?: { key: string; value: string | number | boolean }[];
}

const SendIntend = ({ children, action, extras }: SendIntendProps) => {
  const handlePress = async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e: any) {
      Alert.alert(e.message);
    }
  };

  return <Button title={children} onPress={handlePress} />;
};

export default function SendIntents() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.viewContainer}>
        <SendIntend action="android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS">
          Battery Optimization Settings
        </SendIntend>

        <SendIntend
          action="android.settings.APP_NOTIFICATION_SETTINGS"
          extras={[
            {
              key: "android.provider.extra.APP_PACKAGE",
              value: "com.facebook.katana",
            },
          ]}
        >
          App Notification Settings
        </SendIntend>
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
  viewContainer: {
    gap: 8,
  },
});
```

## Methods

### 1. `addEventListener()`

- **`Linking.addEventListener()`** is called when we want to listen changes to the app's URL or incoming links.
- If another app or browser opens our app via a deep link, this event listener will detect that.

```ts
useEffect(() => {
  const subscription = Linking.addEventListener("url", ({ url }) => {
    console.log("Received URL:- ", url);
  });

  return () => {
    subscription.remove();
  };
});
```

### 2. `canOpenURL()`

- **`canOpenURL()`** is a method that returns a **`Promise`** object. It determines whether or not the given **URL** can be handled.
- In Android 11 (SDK 30) or Higher version, If we don't declare those in our app's **`AndroidManifest.xml`** or **`Info.plist`** (iOS) or **`app.json`**, than **`canOpenURL()`** will fail (reject the promise), event if the link is valid.

```ts
static canOpenURL(url: string): Promise<boolean>;
```

```ts
// app.json
{
  "expo": {
    "android": {
      "intentFilters": [],
      "package": "com.yourcompany.yourapp",
      "permissions": [],
      "queries": [
        {
          "scheme": "https"
        },
        {
          "scheme": "tel"
        },
        {
          "scheme": "whatsapp"
        },
        {
          "scheme": "youtube"
        },
        {
          "scheme": "amazon"
        },
        {
          "scheme": "flipkart"
        },
        {
          "scheme": "whatsapp"
        },
        {
          "scheme": "fb"
        },
        {
          "scheme": "facebook"
        }
      ]
    },
     "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp",
      "infoPlist": {
        "LSApplicationQueriesSchemes": [
          "youtube",
          "amazon",
          "flipkart",
          "whatsapp",
          "fb",
          "facebook"
        ]
      }
    }
  }
}

```

### 3. `getInitialURL()`

- It is a function that gives the URL that was used to open our app, only at the time the app was launched.
- This is useful for **deep linking** -- when another app or browser opens our app via a custom link.

```ts
static getInitialURL(): Promise<string | null>;
```

### 4. `openSettings()`

- Open the settings app and display the app's custom settings, if it has any.

```ts
static openSettings(): Promise<void>;
```

### 5. `openURL()`

- Try to open give url if it is valid (installed).
- It also returns a **`Promise`** object.

| Name   | Type   |
| ------ | ------ |
| url \* | string |

```ts
static openURL(url: string): Promise<any>;
```

### 6. `sendIntent()`

- Launch an Android intent with extras.

| Name      | Type                                                        |
| --------- | ----------------------------------------------------------- |
| action \* | **`string`**                                                |
| extras    | **`Array<{key:string,value:string \| number \| boolean}>`** |
