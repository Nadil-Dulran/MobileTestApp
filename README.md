# TestApp - React Native Learning Project

This is a **learning and test project** built with [**React Native**](https://reactnative.dev), bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli). The purpose of this project is to explore and practice various React Native concepts and TypeScript features.

## What I Learned & Implemented

This project demonstrates various React Native and TypeScript concepts implemented in `App.tsx`:

### TypeScript Fundamentals
- **Interfaces**: Created a `Student` interface to define object structure with properties and methods
- **Classes**: Implemented a `Calculator` class with constructor and methods for arithmetic operations
- **Type Safety**: Used TypeScript types for function parameters and props

### React Hooks & State Management
- **useState Hook**: Implemented state variables (`count`, `y`, `textValue`) to manage component state
- **State vs Regular Variables**: Demonstrated the difference between state variables (cause re-render) and regular variables (don't cause re-render)

### React Native Components
- **Custom Components**: 
  - Created `CustomLable` component (in `src/components/`) with custom styling
  - Built reusable `CustomText` component with typed props
  - Developed multiple functional components (Component1, Component2, Component3)
- **Core Components**: Used `View`, `Text`, `Button`, `TextInput`, and `Alert`
- **Props Passing**: Passed data and functions through props, including object destructuring

### Styling & Layout
- **StyleSheet API**: Used `StyleSheet.create()` for organized styling
- **Flexbox Layout**: Implemented flex properties (`alignItems`, `justifyContent`)
- **Nested Views**: Created complex nested view structures with custom colors, elevation, and borders
- **Inline Styles**: Applied inline styling for various components

### User Interaction
- **Button Handlers**: Created multiple button press handlers
- **TextInput**: Implemented controlled text input with `onChangeText` handler
- **Alert Dialogs**: Used `Alert.alert()` to display results and user input

### JavaScript/TypeScript Concepts
- **Object Literals**: Created and manipulated objects with properties and methods
- **Functions**: Defined various function types (regular functions, arrow functions, methods)
- **Console Logging**: Used console logs for debugging and tracking component renders

## How to Run the Project

> **Note**: Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Install Dependencies

First, install all required dependencies:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

### Step 2: Install iOS Dependencies (iOS only)

For iOS, install CocoaPods dependencies:

```sh
# Install Ruby bundler (first time only)
bundle install

# Install CocoaPods
bundle exec pod install
```

### Step 3: Start Metro Bundler

First, you will need to run **Metro**, the JavaScript bundler for React Native:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 4: Build and Run Your App

With Metro running, open a **new terminal window/pane** and use one of the following commands:

#### For Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

#### For iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

> **Note**: You can also build and run directly from Android Studio or Xcode.

If everything is set up correctly, you should see your app running in the Android Emulator, iOS Simulator, or your connected device.

### Step 5: Making Changes

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Troubleshooting

### Common Issues

#### Metro Bundler Issues
- **Error: Port already in use**
  ```sh
  # Kill the process using port 8081
  npx react-native start --reset-cache
  ```

#### Android Build Issues
- **Gradle build failed**
  - Clean the build: `cd android && ./gradlew clean && cd ..`
  - Check that you have the correct Android SDK installed
  - Verify `local.properties` has the correct SDK path

- **Unable to load script**
  - Make sure Metro is running
  - Try resetting cache: `npm start -- --reset-cache`

#### iOS Build Issues
- **Pod install failed**
  ```sh
  cd ios
  bundle exec pod deintegrate
  bundle exec pod install
  cd ..
  ```

- **Build failed in Xcode**
  - Clean build folder: In Xcode, go to Product → Clean Build Folder
  - Delete derived data: `rm -rf ~/Library/Developer/Xcode/DerivedData`

#### General Issues
- **Module not found errors**
  ```sh
  # Clear node_modules and reinstall
  rm -rf node_modules
  npm install
  # or
  yarn install
  ```

- **Cache issues**
  ```sh
  # Reset Metro cache
  npm start -- --reset-cache
  
  # Clear watchman (if installed)
  watchman watch-del-all
  ```

For more troubleshooting help, visit the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.