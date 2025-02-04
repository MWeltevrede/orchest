# Front-end

## Design System

### Usage

#### Consuming Components

All components are available as named exports:

```js
import React from "react";
import { Link } from "@orchest/design-system";

const SomePage = () => (
  <div>
    <Link href="/link-to-another-page" />
  <div>
);
```

#### Creating Custom Components

The design system houses components that we'll **need to use everywhere**, not the a place for _all_ of our components.

For one-off styles or project-specific use-cases, the design system exports two options: `css` and `styled`.

Both offer strongly-typed access to our [CSS-variable-driven design tokens](https://github.com/orchest/orchest/blob/master/lib/design-system/package/src/core/config.ts) (e.g. `$colors$primary`), and the ability to use Stitches' powerful [variant](https://stitches.dev/docs/variants) system:

```ts
import { css, styled } from "@orchest/design-system";

// with the `styled` API
// https://stitches.dev/docs/api#styled
const CustomStyledComponent = styled("div", { color: "$primary" });

// with the `css` API
// https://stitches.dev/docs/api#css
const customClassName = css({ color: "$primary" });

const CustomClassNameComponent = () => (
  <div className={customClassName()}>
    Hello
  <div>
);
```

### Sandbox

For fast local-development, the sandbox offers a hot-reloading environment to build and test our components.

To get started, run:

```sh
pnpm run sandbox
```

## Style Guide

### React.js

- TypeScript
  - **All** new `.js` files should have `// @ts-check` enabled.
- Component design
  - **Don't** use class components
  - **Do** use functional components
- Sharing state and logic
  - **Avoid** using `window` variables
  - **Avoid** using `ref` to access state from other components
  - **Avoid** ["prop drilling"](https://kentcdodds.com/blog/prop-drilling)
  - **Do** make use of [context-driven hooks](https://reactjs.org/docs/hooks-reference.html#usecontext)

## Project-specific Details

### `orchest-webserver`

#### `useOrchest()`

When sharing global logic/state, make the most of the `useOrchest` hook [(See #214)](https://github.com/orchest/orchest/pull/214)

```js
const {
  // Globally-accessed state
  state,
  // Actions to modify the globally-accessed state
  dispatch,
  // Helpers to filter/find specific areas of the state (e.g. a specific session)
  get,
} = useOrchest();
```

Under-the-hood, `useOrchest` uses [`React.useReducer()`](https://reactjs.org/docs/hooks-reference.html#usereducer) to handle state.

It can be consumed in a functional component like so:

```js
// @ts-check
import React from "react";
import { useOrchest } from "@/hooks/orchest";

const ExampleFC = () => {
  const { state, dispatch } = useOrchest();

  return (
    // <your-component>
  );
};
```

In sessions-dependent views, the additional `SessionsConsumer` should wrap your component. This will trigger fetching and polling for updates via [SWR](https://swr.vercel.app/)).

```js
// @ts-check
import React from "react";
import { useOrchest, SessionsConsumer } from "@/hooks/orchest";

const SessionsExampleFC = () => {
  const { state, dispatch } = useOrchest();

  return <SessionsConsumer>{/* <your-component> */}</SessionsConsumer>;
};
```

## Ongoing Migrations

We can't spend a lot of time refactoring, but we can implement changes incrementally. When contributing to the front-end, please keep in mind the following ongoing migrations:

### Global

- ☐ TypeScript
  1. All `.js` files using `// @ts-check`
  2. All `.js` files moved to `.ts`
- ☐ Class components → Functional components

### `orchest-webserver`

- ☐ Extract all shared logic/state into `useOrchest()` hook [(See #214 for initial setup)](https://github.com/orchest/orchest/pull/214)
