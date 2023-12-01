# Enforce capital letters in constant variable names. (`constants`)

Capital letters in constants increase the clarity of the code.

This does not apply if the constants are already in capital letters.

Users change lowercase letters directly to uppercase letters will not result in errors.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
const number_value = 123456;
```

```jsx
const string_value = "string";
```

Examples of **correct** code for this rule:

```jsx
const NUMBER_VALUE = 123456;
```

```jsx
const STRING_VALUE = "string";
```

## Rule Options

```js
"rules": {
  "component/constants":  [
    <enabled>,
    { customType: <customType> }
  ]
}
```

- `enabled`: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
- `customType`: optional data type to `["number", "string", "bigint", "object", "array"]` (default to `["number", "string"]`).

### `customType`

### 🔴 Incorrect

When `customType` is `["array", "object"]`:

```jsx
const array_value = [];
const object_value = {};
```

When `customType` is `["bigint", "number", "string"]`:

```jsx
const bigint_value = 100n;
const number_value = 29;
const string_value = "string";
```

When `customType` is `["array", "number"]`:

```jsx
const array_value = [], number_value = 29, string_value = "string";
```

### 🟢 Correct

When `customType` is `["array", "object"]`:

```jsx
const ARRAY_VALUE = [];
const OBJECT_VALUE = {};
```

When `customType` is `["bigint", "number", "string"]`:

```jsx
const BIGINT_VALUE = 100n;
const NUMBER_VALUE = 29;
const STRING_VALUE = "string";
```

When `customType` is `["array", "number"]`:

```jsx
const ARRAY_VALUE = [], NUMBER_VALUE = 29, string_value = "string";
```

## When Not To Use It

Do not use it if there is no code convention for a constant.
