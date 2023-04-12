# Lite JSX

[![License][license-image]][license-url]
[![Build Actions][build-image]][build-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]

Lite JSX is a lightweight JavaScript library that allows you to create and manipulate JSX elements using only vanilla JavaScript.

## Purpose of the Project

The purpose of this project is to offer a lightweight and straightforward method of using JSX syntax without relying on external dependencies.

With this library, you can use JSX as a template engine for server-side rendering. The library provides three functions for generating HTML tags, formatting tag properties, and sanitizing strings to prevent XSS attacks.

The library is designed to be flexible, easy to use, and fully compatible with modern JavaScript frameworks and tools.

---

## Installation

You can install Lite JSX via npm:

```bash
npm install lite-jsx
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

## Using Lite JSX with Express

To use Lite JSX with Express, you can create a middleware that overrides the default `res.render` function to add support for JSX templates. Here's an example:

```js
const express = require("express");
const liteJsx = require("lite-jsx");
const Home = require("./home");

const app = express();

// Use the middleware to enable Lite JSX rendering in the Express app.
app.use(liteJsx.__express);

// Render the component using Express.
app.get("/", (req, res) => {
  const data = { message: "Hello, world!" };
  res.render(Home, data);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
```

To enable Lite JSX in our Express app, we're using the `liteJsx.__expres` middleware, which overrides the default `res.render` function to add support for JSX templates.

This way, we can pass a JSX component to `res.render` and it will be rendered as HTML.

And that's it! With these few lines of code, you can start using Lite JSX with Express to create powerful, dynamic web applications.

---

## Using Lite JSX with NestJS

In this section, we'll show you how to use Lite JSX with NestJS.

### Setup

To use Lite JSX with NestJS, we can use the @Render decorator provided by the Lite JSX library to add support for JSX templates. Here's an example:

```ts
// main.ts
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as liteJsx from "lite-jsx";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(liteJsx.__express);
  app.useStaticAssets("public");

  await app.listen(3000);
}
bootstrap();
```

In this example, we're using the `liteJsx.__express` middleware to enable Lite JSX rendering in our NestJS app. We're also using the `app.useStaticAssets` method to serve static assets (like CSS and JavaScript files) from the **public** directory.

### Usage

To enable Lite JSX in our NestJS app, we're using the `@Render` decorator provided by the Lite JSX library, which adds support for JSX templates. Here's an example:

```ts
// app.controller.ts
import { Controller, Get } from "@nestjs/common";
import { Home } from "./home";
import { Render } from "lite-jsx";

@Controller()
export class AppController {
  @Get()
  @Render<{ message: string }>(Home)
  getHello(): { message: string } {
    return { message: "Hello, World!" };
  }
}
```

This way, we can pass a JSX component to `@Render` and it will be rendered as HTML.

And that's it! With these few lines of code, you can start using Lite JSX with NestJS to create powerful, dynamic web applications.

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

https://github.com/danprates/lite-jsx

## License

Lite JSX is licensed under the [MIT License](https://github.com/danprates/lite-jsx/blob/master/LICENSE).

[npm-url]: https://npmjs.org/package/lite-jsx
[npm-image]: https://img.shields.io/npm/v/lite-jsx.svg?style=for-the-badge
[downloads-image]: https://img.shields.io/npm/dm/lite-jsx.svg?style=for-the-badge
[build-image]: https://img.shields.io/github/actions/workflow/status/danprates/lite-jsx/publish.yml?style=for-the-badge
[build-url]: https://github.com/danprates/lite-jsx/actions/workflows/publish.yml
[license-image]: https://img.shields.io/github/license/danprates/lite-jsx?style=for-the-badge
[license-url]: https://github.com/danprates/lite-jsx/blob/master/LICENSE
