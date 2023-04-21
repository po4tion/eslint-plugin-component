# eslint-plugin-component

espc

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-component`:

```sh
npm install eslint-plugin-component --save-dev
```

## Usage

Add `component` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["component"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "component/case-strict": "error"
  }
}
```

This plugin only works in the components folder path.

## Rules

<!-- begin auto-generated rules list -->

component/case-strict : Change the first letter of the component to uppercase if it is lowercase.

<!-- end auto-generated rules list -->
