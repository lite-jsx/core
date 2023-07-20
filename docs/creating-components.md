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
