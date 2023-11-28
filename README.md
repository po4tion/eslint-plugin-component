# eslint-plugin-component

espc

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i -D eslint
#OR
yarn add -D eslint
#OR
pnpm add -D eslint
```

Next, install `eslint-plugin-component`:

```sh
npm install -D eslint-plugin-component
#OR
yarn add -D eslint-plugin-component
#OR
pnpm add -D eslint-plugin-component
```

## Usage

<b>This plugin only works in the components folder path.</b>

Add `component` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["component"]
}
```

## Rules

<!-- begin auto-generated rules list -->

[component/jsx-pascal-in-component](docs/rules/jsx-pascal-in-component.md) : Change the first letter of the component to uppercase if it is lowercase.

<!-- end auto-generated rules list -->
