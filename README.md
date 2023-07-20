# Lite JSX

[![License][license-image]][license-url]
[![Build Actions][build-image]][build-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]

Lite JSX is a lightweight JavaScript library that allows you to create and manipulate JSX elements using only vanilla JavaScript.

## Table of contents

- [Purpose](#purpose-of-the-project)
- [Installation](#installation)
- [Creating Components](#creating-components)
- [Examples](#examples)
- [Using Lite JSX with NestJS](#using-lite-jsx-with-nestjs)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Purpose of the Project

The purpose of this project is to offer a lightweight and straightforward method of using JSX syntax without relying on external dependencies.

With this library, you can use JSX as a template engine for server-side rendering. The library provides three functions for generating HTML tags, formatting tag properties, and sanitizing strings to prevent XSS attacks.

The library is designed to be flexible, easy to use, and fully compatible with modern JavaScript frameworks and tools.

---

## Installation

You can install Lite JSX via npm:

```bash
npm install @lite-jsx/core
```

---

## Creating Components

For a better development experience, we recommend using TypeScript to compile your components. It's easy to get started:

```bash
$ npm install -D typescript
```

Next, add the following attributes to your tsconfig.json file:

```js
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h"
    // other options omitted for brevity
  }
}
```

Once you have these in place, you can start writing components using Lite JSX like this:

```jsx
import { h } from "lite-jsx";

const Home = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
);
```

TypeScript will compile your code into the following JavaScript:

```js
const { h } = require("lite-jsx");

const Home = ({ message }) => {
  return h("div", null, h("h1", null, message));
};

module.exports = { Home };
```

And that's it! You can now use your Lite JSX components in your application.

---

## Examples

Here you can see a list of implementations using Lite JSX:

- [Lite JSX + Express](https://github.com/lite-jsx/express)
- [Lite JSX + Fastify](https://github.com/lite-jsx/fastify)

---

## API

```ts
h(
  tagName: string,
  props?: Record<string, any>,
  ...children: (string | JSX.Element)[]
): JSX.Element
```

Creates a new JSX element.

- tagName: The name of the element to create.
- props: An object containing the element's props.
  ...children: One or more strings or JSX elements to add as children.
- Returns the created JSX element.

---

## Contributing

If you'd like to contribute to Lite JSX, please feel free to submit a pull request or open an issue on GitHub:

https://github.com/lite-jsx/core

## License

Lite JSX is licensed under the [MIT License](https://github.com/lite-jsx/core/blob/master/LICENSE).

[npm-url]: https://npmjs.org/package/@lite-jsx/core
[npm-image]: https://img.shields.io/npm/v/@lite-jsx/core.svg?style=for-the-badge
[downloads-image]: https://img.shields.io/npm/dm/@lite-jsx/core.svg?style=for-the-badge
[build-image]: https://img.shields.io/github/actions/workflow/status/lite-jsx/core/publish.yml?style=for-the-badge
[build-url]: https://github.com/lite-jsx/core/actions/workflows/publish.yml
[license-image]: https://img.shields.io/github/license/lite-jsx/core?style=for-the-badge
[license-url]: https://github.com/lite-jsx/core/blob/master/LICENSE
