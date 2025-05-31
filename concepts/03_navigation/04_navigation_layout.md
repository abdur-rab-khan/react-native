# Navigation layouts in Expo router

> Each directory inside **app** directory (including **app** itself) can define (create) a **layout** file, Which determines how all routes within same directory are arranged. This is where we define **Stack Navigator**, **Tab Navigator**, **Drawer Navigator** or any other layout that we want to render for this pages in that directory.

- [Navigation layouts in Expo router](#navigation-layouts-in-expo-router)
  - [Root layout](#root-layout)
  - [Stack](#stack)
  - [Tab](#tab)
  - [Slot](#slot)

## Root layout

- Every app will have a **\_layout.tsx** file inside the **app** directory. This is the root layout and represent the entry point for our navigation.
- This is the file where we put initialize code such as **loading fonts**, interacting with **splash screen**, or adding context providing.

```ts
// app/_layout.tsx

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack />;
}
```

## Stack

- You can implement **stack navigator**, if you want to arrange all routes as a **stack** inside the **app** directory or any other directory where you want.

```shell
- app
    - products
        - _layout.tsx
        - index.tsx
        - [productId].tsx
  
    - accessories
        - index.tsx
```

- So suppose you want everything routes inside the products are arranged as a **stack**, inside the **\_layout.tsx** file, return a **`Stack`** components.

  ```ts
  import { Stack } from "expo-router";

  export default function StackLayout() {
    return <Stack />;
  }
  ```

- So in the above example, When we go to **/product**, it by default route to **/product/index**, than when you go to **/product/123**, than that page will be pushed onto the **stack**.
- By default after stack will render a **back button** in the header that will pop the current page from stack.

## Tab

- You can implement **Tab** navigator in our **layout** file, and all the routes directly inside that directory will treated as **tabs**.

```shell
- app
    - (tabs)
        - _layout.tsx
        - index.tsx
        - feed.tsx
        - profile.tsx

```

- **Tab** component will return from **\_layout.tsx** file.

```ts
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
        }}
      />
      <!-- Add more tabs here -->
    </Tabs>
  );
}
```

## Slot

- In some cases, you may want layout without any navigator. This is helpful for adding **header** or **footer** around the current route. or for displaying any model over any route inside the directory.
- In this case, you can use the Slot component, which serves as a placeholder for the current child route

```ts
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
```

- For example, you may want to wrap any route inside the social directory with a header and footer, but you want navigating between the pages to simply replace the current page rather than pushing new pages onto a stack, which can then later be popped off with a "back" navigation action. In the \_layout.tsx file, return a Slot component surrounded by your header and footer:
