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
