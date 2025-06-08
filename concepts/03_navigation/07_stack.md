# Stack in Expo

> A stack navigator provides a way to navigate between routes in our app. Expo router provide a **`Stack`** component that create a navigation stack and allow us to add new routes in our app.

- [Stack in Expo](#stack-in-expo)
  - [Get started](#get-started)
  - [Screen Option and Header configuration](#screen-option-and-header-configuration)
  - [Configure Header Bar](#configure-header-bar)
    - [Set screen option dynamically](#set-screen-option-dynamically)
    - [Header Buttons](#header-buttons)
    - [Custom Push Behavior](#custom-push-behavior)
    - [Removing Stack Screen](#removing-stack-screen)
      - [1. `dismiss` action](#1-dismiss-action)
      - [2. `dismissTo` action](#2-dismissto-action)
      - [3. `dismissAll` action](#3-dismissall-action)
      - [4. `canDismiss` action](#4-candismiss-action)

## Get started

- Here, file-based routing structure.

  ```shell
  - app
      - _layout.tsx
      - index.tsx
      - details.tsx
  ```

- The above provides a route layout of our app, Where **`index`** route is the first route in the stack, and the **`detail`** route is pushed on the top of **`index`** route.

- **app/\_layout.tsx** file defines our app **`Stack`** navigator.

  ```tsx
  import { Stack } from "expo-router";

  export default function Layout() {
    return <Stack />;
  }
  ```

## Screen Option and Header configuration

- **Statically configure route options**

  - We can use **`<Stack.Screen name={routeName}` />** component in the layout component to statically configure a route's option.

    ```tsx
    import { Stack } from "expo-router";

    export default function Layout() {
      return (
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {/*Optionally configure static options outside the route.*/}
          <Stack.Screen name="home" options={{}} />
        </Stack>
      );
    }
    ```

    - An alternatively to **<Stack.Screen>** component, we can use **`navigation.setOptions()`** to configure a route's options

      ```tsx
      import { Stack, useNavigation } from "expo-router";
      import { Text, View } from "react-native";
      import { useEffect } from "react";

      export default function Home() {
        const navigation = useNavigation();

        useEffect(() => {
          navigation.setOptions({ headerShown: false });
        }, [navigation]);

        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Home Screen</Text>
          </View>
        );
      }
      ```

## Configure Header Bar

- We can configure all header bar style for all routes in a **`Stack`** navigator by using the **`screenOption`** props. It is suitable for styling header for all routes.

  ```tsx
  import { Stack } from "expo-router";

  export default function Layout() {
    return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    );
  }
  ```

- To configure header bar dynamically for individual route, By using **`<Stack.Screen>`** component we can do that.

### Set screen option dynamically

- To configure a route's option dynamically, Adding **`Stack.Screen`** in that route's file we can configure it. Alternative approach is `router.setParams()` to configure route's option.

  ```tsx
  import { Stack, useLocalSearchParams, useRouter } from "expo-router";
  import { View, Text, StyleSheet } from "react-native";

  export default function Details() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: params.name,
          }}
        />
        <Text
          onPress={() => {
            router.setParams({ name: "Updated" });
          }}
        >
          Update the title
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  ```

### Header Buttons

- We can optionally add header button by using **`headerLeft`** and **`headerRight`** options. These functions accept **React Component** that render in the header.

  ```tsx
  import { Stack } from "expo-router";
  import { Button, Text, Image, StyleSheet } from "react-native";
  import { useState } from "react";

  function LogoTitle() {
    return (
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    );
  }

  export default function Home() {
    const [count, setCount] = useState(0);

    return (
      <>
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => setCount((c) => c + 1)}
                title="Update count"
              />
            ),
          }}
        />
        <Text>Count: {count}</Text>
      </>
    );
  }

  const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
    },
  });
  ```

### Custom Push Behavior

- By default, **`Stack`** navigator remove duplicate screen when pushing a route that is already in the stack.
- Example: If you push a screen that is already there the second push will be ignored. we can change this behavior by simply passing a **`getId()`** function to the **`Stack.Screen`**.

  ```shell
  - app
      - _layout.tsx
      - index.tsx
      - [details].tsx  <--------------->   matches dynamic paths like '/details1'
  ```

  ```tsx
  import { Stack } from "expo-router";

  export default function Layout() {
    return (
      <Stack>
        <Stack.Screen
          name="[profile]"
          getId={({ params }) => String(Date.now())}
        />
      </Stack>
    );
  }
  ```

### Removing Stack Screen

- There are different action we can use to dismiss and remove one or many routes from a **`Stack`**

#### 1. `dismiss` action

- The **`dismiss`** action is used to remove the current route from the stack and return to the previous route.
- We can optionally pass a **`number`** to the **`dismiss`** action to remove multiple routes from the stack.
- Example: If we pass **`1`** to the **`dismiss`** action, it will remove the current route and return to the previous route.

  ```tsx
  import { Button, View } from "react-native";

  import { useRouter } from "expo-router";

  export default function Settings() {
    const router = useRouter();

    const handleDismiss = (count: number) => {
      router.dismiss(count);
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Go to first screen" onPress={() => handleDismiss(3)} />
      </View>
    );
  }
  ```

#### 2. `dismissTo` action

- The **`dismissTo`** action is used to dismiss all routes until the specified (**`href`**) route is reached.
- For Example: Consider a history of **`/one`**, **`/two`**, **`/three`** routes, If we call **`dismissTo('/one')`** it will remove the **`/two`** and **`/three`** routes and return to the **`/one`** route. if you pass **`/four`** it will push a new route to the stack.

  ```tsx
  import { Button, View } from "react-native";
  import { useRouter } from "expo-router";

  export default function Settings() {
    const router = useRouter();

    const handleDismissTo = () => {
      router.dismissTo("/one");
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Dismiss to /one" onPress={handleDismissTo} />
      </View>
    );
  }
  ```

#### 3. `dismissAll` action

- The **`dismissAll`** action is used to remove all routes from the stack and return to the root route.

  ```tsx
  import { Button, View, Text } from "react-native";

  import { useRouter } from "expo-router";

  export default function Settings() {
    const router = useRouter();

    const handleDismissAll = () => {
      router.dismissAll();
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Go to first screen" onPress={handleDismissAll} />
      </View>
    );
  }
  ```

#### 4. `canDismiss` action

- The **`canDismiss`** action is used to check if the current route can be dismissed. It returns a boolean value indicating whether the current route can be dismissed or not.

  ```tsx
  import { Button, View } from "react-native";
  import { useRouter } from "expo-router";

  export default function Settings() {
    const router = useRouter();

    const handleDismiss = (count: number) => {
      if (router.canDismiss()) {
        router.dismiss(count);
      }
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Maybe dismiss" onPress={() => handleDismiss()} />
      </View>
    );
  }
  ```
