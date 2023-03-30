# Simple JSX

Simple JSX is a lightweight JavaScript library that allows you to create and manipulate JSX elements using only vanilla JavaScript.

## Purpose of the Project

The purpose of this project is to offer a lightweight and straightforward method of using JSX syntax without relying on external dependencies.

With this library, you can use JSX as a template engine for server-side rendering. The library provides three functions for generating HTML tags, formatting tag properties, and sanitizing strings to prevent XSS attacks.

The library is designed to be flexible, easy to use, and fully compatible with modern JavaScript frameworks and tools.

## Installation

You can install Simple JSX via npm:

```bash
npm install simple-jsx
```

---

## Creating Elements

To create a JSX element, you can use the `h` function provided by Simple JSX:

```js
const element = h("div", { class: "my-class" }, "Hello, world!");
```

This will create a div element with the class my-class and the text "Hello, world!".

```html
<div class="my-class">Hello, world!</div>
```

### Using JSX Syntax

If you prefer to use JSX syntax instead of the `h` function, you can use a transpiler like Babel to convert your code:

```jsx
const MyComponent = ({ name }) => <div class="my-class">Hello {name}!</div>;
h(MyComponent, { name: "John" });
```

This will create a div element with the class my-class and the text "Hello John!".

```html
<div class="my-class">Hello John!</div>
```

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

If you'd like to contribute to Simple JSX, please feel free to submit a pull request or open an issue on GitHub:

https://github.com/your-github-username/simple-jsx

## License

Simple JSX is licensed under the [MIT License](https://github.com/danprates/simple-jsx/blob/master/LICENSE).
