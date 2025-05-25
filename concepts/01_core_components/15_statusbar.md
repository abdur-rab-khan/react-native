# Status Bar in React Native

> **`StatusBar`** is a Component to control them, So **`StatusBar`** is actually positioned the top of the screen where we see **time**, **wifi**, and other things.

- It is possible to have multiple `StatusBar` components mounted at the same time. They can work seamlessly with the navigator, and their props are applied in the order they are mounted.

  - It allows use to have multiple **`StatusBar`** components in different screens or components.

- There are two ways to declare **`StatusBar`**

  1. Declarative (Component-based) - using the **`<StatusBar />`** React component.

  - Example

    ```ts
    export default function HomeScreen() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#6200EE" />
          <Text style={styles.text}>Welcome to Home Screen</Text>
        </View>
      );
    }
    ```

  2. Imperative (Static API) - using static methods like **`StatusBar.setBarStyle()`**.

  - Example

    ```ts
    export default function SettingsScreen() {
    const toggleStyle = () => {
    StatusBar.setBarStyle('dark-content'); // Immediately apply dark status bar
    StatusBar.setBackgroundColor('#ffffff'); // White background
    };

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <Button title="Set Status Bar Style" onPress={toggleStyle} />
    </View>
    );
    ```

## Props

### Important

#### 1. `currentHeight` - constants

#### 2. `animated`

- If you want transition between status bar property changes. Supported for **`backgroundColor`**, **`barStyle`** and **`hidden`** properties.

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

#### 3. `barStyle`

- Sets the color of the status bar text.

| Type                   | Default   |
| ---------------------- | --------- |
| [**`StatusBarStyle`**] | `default` |

#### 4. `hidden`

- `true`, If you want to hide them.

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

#### 5. `translucent`

### Methods

#### 1. `popStackEntry()`

#### 2. `pushStackEntry()`

#### 3. `replaceStackEntry()`

#### 4. `setTranslucent()`

### Type Definition

#### 1. `StatusBarStyle`

- Style of the status bar props.

| Type |
| ---- |
| enum |

#### 1. `StatusBarStyle`

- Style of the status bar props.

| Value             | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `'default'`       | Default status bar style (dark for iOS, light for Android) |
| `'light-content'` | White texts and icons                                      |
| `'dark-content'`  | Dark texts and icons (requires API>=23 on Android)         |
