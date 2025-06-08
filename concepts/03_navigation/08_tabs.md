# Tab in Expo

> Tabs are a common way to navigate between different sections of our app. Expo provides a tabs layout to help us to create a tab bar at the bottom of the screen.

![tab-bar](https://docs.expo.dev/static/images/expo-router/tabs.png)

- [Tab in Expo](#tab-in-expo)
  - [Get Started](#get-started)
  - [Screen Options](#screen-options)
    - [Hiding a tab](#hiding-a-tab)
    - [Dynamic routes](#dynamic-routes)

## Get Started

- File Structure.

  ```shell
  - app
    - _layout.tsx
   
  - (tabs)
    - _layout.tsx
    - index.tsx
    - settings.tsx
  ```

- The (tabs) directory has three files. The first is (tabs)/\_layout.tsx. This file is the main layout file for the tab bar and each tab. Inside it, you can control how the tab bar and each tab button look and behave.

```tsx
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index" // "💀 NOTE:-" Name will only work when using _layout component.
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="details" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

## Screen Options

- **`tabBarLabelStyle`:** Style object for the tab label.

  ```ts
    tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: 'Georgia',
      fontWeight: 300,
    },
  ```

- **`tabBarIcon`:** Function that given `{ focused: boolean, color: string, size: number }` returns a React.Node, to display in the tab bar.

- **`tabBarBadge`:** Text to show in a badge on the tab icon. Accepts a string or a number.

  ![tab-bar-badge](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarBadge.png)

- **`tabBarBadgeStyle`:** Style the badge on a tab icon.

  ```ts
  tabBarBadgeStyle: {
      color: 'black',
      backgroundColor: 'yellow',
  },
  ```

  ![tab-bar-badge-style](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarBadgeStyle.png)

### Hiding a tab

- Something you want a route to exist but not show up in the tab bar. You can pass **`href:null`** to disable the button

  ```ts
  import { Tabs } from "expo-router";

  export default function TabLayout() {
    return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    );
  }
  ```

### Dynamic routes

- You can use a dynamic route in a tab bar. For example, you have a [user] tab that shows a user's profile. You can use the href option to link to a specific user's profile.

  ```tsx
  import { Tabs } from 'expo-router';

  export default function TabLayout() {
    return (
      <Tabs>
        <Tabs.Screen
          {/*Name of the dynamic route.*/}
          name="[user]"
          options={{
            {/* Ensure the tab always links to the same href.*/}
            href: '/evanbacon',
            {/* OR you can use the href object.*/}
            href: {
              pathname: '/[user]',
              params: {
                user: 'evanbacon',
              },
            },
          }}
        />
      </Tabs>
    );
  }
  ```
