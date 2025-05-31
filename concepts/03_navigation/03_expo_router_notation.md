# Expo concepts

- [Expo concepts](#expo-concepts)
  - [Top-level src directory](#top-level-src-directory)
  - [Expo Router notation](#expo-router-notation)
    - [Types of route notation](#types-of-route-notation)
      - [1. Simple names/no notation](#1-simple-namesno-notation)
      - [2. Square brackets](#2-square-brackets)
      - [3. Parentheses](#3-parentheses)
      - [4. \_layout.tsx files](#4-_layouttsx-files)
      - [5. Plus sign](#5-plus-sign)

## Top-level src directory

- As our project grows, We have to move all directories into a single **src** directory.

  ```shell
  - src 
      - app 
          - _layout.tsx 
          - index.tsx
   
  - components
      - button.tsx

  - package.json
  ```

- **💀 NOTE:**
  - The config file (**`app.json`**, **`app.config.tsx`**, **`package.json`**, **`metro.config.js`**, **`tsconfig.json`**) should remain in the **root** directory.
  - The **public directory** should remain in the **root** directory.

## Expo Router notation

### Types of route notation

#### 1. Simple names/no notation

```shell
- app
  - home.tsx
 
  - feed
    - favorites.tsx
```

- Regular files without any notation signify simple **static route**. Their **URL** matches exactly as they appear in our file tree.
- **Example**: **favorites.tsx** inside the feed directory will have a **URL** of **`/feed/favorites`**

#### 2. Square brackets

```shell
- app
  - [userName].tsx
 
  - products
    - [productId]
        - index.tsx
```

- If you see **`[]`** on files or directory name, that is know as **_dynamic route_**.
- To render that routes you have to pass **parameter** that can be used to render that page.
- **[userName].tsx** need a **userName** parameter to render that page e.g -- **/abdurrab222**, To access that parameter from that page we can use **`useLocalSearchParams`** hook.

#### 3. Parentheses

```shell
- app
  - (tabs)
    - index.tsx
    - settings.tsx
```

- A directory name surrounded with parentheses **()** indicates that \_**route group**.
- It is used to group routes without affecting the **URL**. For example a file named **`app/(tab)/settings.tsx`** will represent as **/settings** URL.
- It is commonly used to group routes with custom **\_layouts** each group will have their custom layout.

```shell
- app
  - (tabs)
    - index.tsx
 
  - profile
    - index.tsx
```

#### 4. \_layout.tsx files

```shell
- app
  - _layout.tsx
 
  - (tabs)
    - _layout.tsx
 
  - feed
    - _layout.tsx
```

- **\_layout.tsx** is not a pages, It is a special file that defines how group inside a directory related to each other.
- In this file we actually define how route is arranged example **stack**, **tabs**.
- **Layout** route are rendered before the actual pages route inside their directory.

#### 5. Plus sign

```shell
- app
  - +not-found.tsx
  - +html.tsx
  - +native-intent.tsx
```

- Routes that starts with **`+`** is special meaning in Expo router, and they are used for special purpose.
- **`+not-found`**, catches any request that don't match a route in our app.
- **`+native-intent`**,
- **`+html`**,
