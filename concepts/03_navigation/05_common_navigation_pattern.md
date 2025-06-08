# Common navigation patterns

- [Common navigation patterns](#common-navigation-patterns)
  - [Stacks inside tabs: nested navigators](#stacks-inside-tabs-nested-navigators)
  - [One screen, two tabs: sharing routes](#one-screen-two-tabs-sharing-routes)
  - [Authenticated users only: protected routes](#authenticated-users-only-protected-routes)

## Stacks inside tabs: nested navigators

- Typically starting point of our app is a set of **tabs**, but one more tabs may have more than on screen associated with it.
- To implement this we can use nesting stack navigator inside of a **tab**. The pattern often result a intuitive **URL's** and scales well to desktop and web application.

```shell
- app
  - (tabs)
  - _layout.tsx
  - index.tsx           <------------------------------->                 single page tab
  
  - feed
    - _layout.tsx   <----------------------------------->       tab with a stack inside
    - index.tsx
    - [postId].tsx
  
  settings.tsx      <--------------------------------->               single page tab
```

- **app/(tabs)/\_layout.tsx** file, return a **`Tab`** Component.

  ```ts
  import { Tabs } from "expo-router";

  export default function TabLayout() {
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="feed" options={{ title: "Feed" }} />
        <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      </Tabs>
    );
  }
  ```

- **app/(tabs)/feed/\_layout.tsx** file, return a **`Stack`** Component.

  ```ts
  import { Stack } from "expo-router";

  export const unstable_settings = {
    initialRouteName: "index",
  };

  export default function FeedLayout() {
    return <Stack />;
  }
  ```

- **app/(tabs)/feed/index.tsx** file, return a **`Tab`** Component.

  ```ts
  <Link href="/feed/123" withAnchor>
    Go to post
  </Link>
  ```

- The **app/(tabs)/feed** directory, you can have **`Link`** component that represent different points -- (e.g **`/feed/123`**), Those links are pushed the **`feed/[postId]`** route onto the stack.

## One screen, two tabs: sharing routes

- Route group can be used to share a single screen between two different tabs. Consider a navigation tree that has a Feed tab and a Search tab, and they both share pages for viewing a user profile:

```shell
- app
 
  - (tabs)
    - _layout.tsx

  - (feed)
    - index.tsx <--------------------------> default route
    
  - (search)
    - search.tsx
    
  - (feed,search)
    _layout.tsx  <--------------------------------->  layout shared between the two tabs
     
  - users
    - [username].tsx  <----------------------------------->  shared user profile page
```

- Each tabs **(feed)**, **(search)** put in a group, So we can define a third directory that share routes between two group **(app/(tabs)/(feed, search)**.

  ```tsx
  import { Tabs } from "expo-router";

  export default function TabLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="(feed)" options={{ title: "Feed" }} />
        <Tabs.Screen name="(search)" options={{ title: "Search" }} />
      </Tabs>
    );
  }
  ```

- Both **feed**, **search** route group contain stacks, so they can also share a single layout.

  ```tsx
  import { Stack } from "expo-router";

  export default function SharedLayout() {
    return <Stack />;
  }
  ```

- It's also possible for shared groups to only contain the shared pages, with each distinct group having its own layout file.
- Now, both tabs can navigate to /users/evanbacon and see the same user profile page.

## Authenticated users only: protected routes

- If you want to set a route can only **accessible** to authenticated user. you can embed those routes in a group whose layout redirects users to a login page if they are not authenticated.

  ```shell
  - app
    - _layout.tsx
    - login.tsx  <------------------------->   routes users back to /(logged-in) after authentication
     
    - (logged-in)
      - _layout.tsx  <----------------------> includes redirect for unauthenticated users
      
      - (tabs)
        - _layout.tsx
        - index.tsx  <---------------------------> default route for app
        - feed.tsx
      - modal.tsx
  ```

- By default, app will render nearest index, **app/(logged-in)/(tabs)/index.tsx**. However, a route group's layout fill will be rendered before the enclose route is.
- So if user is not authenticated at this point, we can redirect user to **/login**.

  ```tsx
  // app/(logged-in)/_layout.tsx

  import { Redirect, Stack } from 'expo-router';

  export default function AuthLayout() {
    const isAuthenticated = /* check for valid auth token/session */

    if (!isAuthenticated) {
      return <Redirect href="/login" />;
    }

    return <Stack />;
  }
  ```
