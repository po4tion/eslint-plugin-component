# Change the first letter of the component to uppercase if it is lowercase. (`jsx-pascal`)

React components in the "components" or "components" path must be "Pascal case".

This restriction applies only if you are in the "components" and "components" paths. This route will be subject to strong restrictions.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
const component = () => {};
```

```jsx
function component = () => {}
```

Examples of **correct** code for this rule:

```jsx
const Component = () => {};
```

```jsx
function Component = () => {}
```

## Rule Options

```js
...
"rules": {
  "component/jsx-pascal-in-component": [
    <enabled>,
    { allowAllPaths: <allowAllPaths> }
  ]
}
...


```

- `enabled`: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
- `allowAllPaths`: optional boolean set to `true` to allow components name in all paths (default to `false`).

### `allowAllPaths`

Examples of **correct** code for this rule, when `allowAllPaths` is `false`:

```jsx
// hocs/Component.jsx

const component = () => {
  return <div>Component</div>;
};
```

```jsx
// hocs/Component.jsx

function component() {
  return <div>Component</div>;
}
```

Examples of **correct** code for this rule, when `allowAllPaths` is `true`:

```jsx
// hocs/Component.jsx

const Component = () => {
  return <div>Component</div>;
};
```

```jsx
// hocs/Component.jsx

function Component() {
  return <div>Component</div>;
}
```

## When Not To Use It

If you are not using JSX.
