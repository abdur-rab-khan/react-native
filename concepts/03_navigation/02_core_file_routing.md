# Core concepts of file-based routing

- [Core concepts of file-based routing](#core-concepts-of-file-based-routing)
  - [The rules of Expo Router](#the-rules-of-expo-router)
    - [1. All Screen/pages files inside the `app` directory](#1-all-screenpages-files-inside-the-app-directory)
    - [2. All pages have a URL](#2-all-pages-have-a-url)
    - [3. First `index.tsx` defines the initial route](#3-first-indextsx-defines-the-initial-route)
    - [4. Root \_layout.tsx replaces App.jsx/tsx](#4-root-_layouttsx-replaces-appjsxtsx)
    - [5. Non-navigation components live outside of app directory](#5-non-navigation-components-live-outside-of-app-directory)
    - [6. It's still React Navigation under the hood](#6-its-still-react-navigation-under-the-hood)
  - [The rules of Expo Router applied](#the-rules-of-expo-router-applied)

## The rules of Expo Router

### 1. All Screen/pages files inside the `app` directory

- All navigation routes in Expo app are define by files and sub-directories inside the **app** directory. Every file inside the **app** directory defines a distinct page in our app (expect for the special **\_layout** file).
- Directories inside the app define group of related screens together as **stacks**, **tabs** or in other arrangements.

### 2. All pages have a URL

- All pages in the web has a **URL**, that is defined by the files and sub-directories inside the **app** directory just like **NEXT.JS**.
- It also supports **deep link** in a native mobile app, All pages in our app whether it is **mobile** or **web** can be navigate using **URL**.

### 3. First `index.tsx` defines the initial route

- Similar to **NEXT.JS** where we does not define any initial route. In Expo When app is firstly open it find **`app/index.tsx`** file matching the URL **`\`**.
- But this is always not a case. You can use a **route group** that will not count as a part of the URL.
- If you want first screen as a group of tabs, you can put all tabs inside the **app/(tab)** directory and define a default tab as a **index.tsx**.

### 4. Root \_layout.tsx replaces App.jsx/tsx

- Every project should have a **\_layout.tsx** file directly inside **app** directory. This file is rendered before any other route in our app and here we could put **initialize** code that may load **fonts** or interacting with the **splash screen**.

### 5. Non-navigation components live outside of app directory

- In Expo router, the **app** directory exclusively design for our app routes. Other parts of our apps like **components**, **hooks**, **utilities** and so on should define outside the app directory.
- Alternatively, you can create a top-level src directory and put your routes inside the src/app directory

### 6. It's still React Navigation under the hood

- Expo Router is actually built on top of React Navigation. You can think of Expo Router as an Expo CLI optimization that translates your file structure into React Navigation components that you previously defined in your own code.

## The rules of Expo Router applied

- Foundation rules of Expo router to quickly identify key elements of the following project file structure.

```shell
- app
    - index.tsx
    - home.tsx
    - _layout.tsx

    - profile
        - friends.tsx

- components
    - TextField.tsx
    - Toolbar.tsx
```

- **`app/index.tsx`** is the initial route, and will appear first when you open the app or navigate to your web app's root URL.
- **`app/home.tsx`** is a page with the route /home, so you can navigate to it with a URL like yourapp.com/home in the browser, or myapp://home in a native app.
- **`app/_layout.tsx`** is the root layout. Any initialization code you may have previously put in App.jsx should go here.
- **`app/profile/friends.tsx`** is a page with the route /profile/friends.
- **`TextField.tsx`** and Toolbar.tsx are not in the app directory, They will not have a URL, and they cannot be the target of a navigation action. However, they can be used as components in the pages inside of the app directory.
