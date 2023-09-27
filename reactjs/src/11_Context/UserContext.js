import React from "react";
// Context API is an built in method in React
/*
**Using Context API:**

```jsx
// Context provides a shared theme
const ThemeContext = React.createContext('light');

// Component consuming theme from context
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}

// Component hierarchy wrapped with Context.Provider
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

In this example, we use the Context API to provide and consume the theme across components. The `ThemedButton` component accesses the theme value from the context without props.

**Without Context API:**

```jsx
// Theme passed down through props
function ThemedButton(props) {
  return <button className={props.theme}>Themed Button</button>;
}

// Prop drilling: passing theme through multiple components
function App() {
  return (
    <div>
      <ThemedButton theme="dark" />
    </div>
  );
}
```

Without the Context API, you'd have to pass the theme down through props, potentially leading to prop drilling, where you pass the same prop through multiple intermediary components, making the code more complex and less maintainable. Context API simplifies state sharing in such cases.

*/
const UserContext=React.createContext();

export default UserContext