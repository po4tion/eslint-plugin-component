# Enforce number literals for readability. (`number-easy-read`)

Using a separator ('\_') for every thousand digits is a way to improve readability.

This restriction may be one of the ways to improve your number readability.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
const num = 11111111;
```

```jsx
const num = 123456789;
```

Examples of **correct** code for this rule:

```jsx
const num = 11_111_111;
```

```jsx
const num = 123_456_789;
```

## Rule Options

```js
...
"rules": {
  "component/number-easy-read":  [
    <enabled>,
    { minLength: <minLength> }
  ]
}
...


```

- `enabled`: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
- `minLength`: set the length of the number to which eslint applies (default to `4`).

## When Not To Use It

When you don't care about readability when writing number type code.
