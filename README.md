# Human UI

This package is a _Work In Progress_

This UI library is built upon `theme-ui` and strictly adheres to Apple's Human Interface Guidelines. It features primitives, accessibility and is fully responsive.

### Get Started

```bash
npm i human-ui
```

```jsx
import { HumanTheme } from 'human-ui'

function App() {
 
 return (
  <ThemeProvider theme={new HumanTheme()}>
   // ...
  </ThemeProvider>
 )
}
```