# Human UI

This package is a _Work In Progress_

This UI library is built using The Platform™️. It is made possible by StencilJS, web-components, css modules and other native browser features.

### Short Goals

- Recreate [Apple's Human Interface Design](https://developer.apple.com/design/resources/) on the web.
- Adhere to the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/).
- Be responsive to devices employing "constraint-based design"

### Long Goals

- Inter-op with [Swift-WASM](https://swiftwasm.org) for building web-apps with Swift UI
- Explore [GSS](https://gss.github.io/guides/ccss) for a more familiar "Cassowary"-like DX

### Get Started

```bash
npm i human-ui
```

### FAQ

There haven't been any real questions yet but here are some I anticipate.

<details>
<summary>Why not React/Vue/Svelte?</summary>
In the rare web-app that Apple creates they have leaned towards web-components. In an effort to follow that, I've decided that these components were best served as native as possible. This also means that you can use these components in React, Vue, Svelte, Vanilla JS, etc. and any future framework.
</details>

<details>
<summary>Why is it called Human UI?</summary>
Apple has a tendency of suffixing their libraries with "Kit" like ARKit, CloudKit, etc. Webkit was already taken 😉.
</details>
