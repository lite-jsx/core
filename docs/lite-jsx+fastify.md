# How to use Lite JSX + Fastify

Step 1: Set Up a New Project

First, create a new project folder and navigate into it:

```bash
mkdir <project-name>
cd <project-name>
npm init -y
npm install
```

Step 2: Install Fastify

Install Fastify as project dependencies:

```bash
npm install fastify
```

Step 3: Install TypeScript

Install TypeScript as a project dependency:

```bash
npm install typescript
```

Step 4: Configure TypeScript

Generate a `tsconfig.json` file to configure TypeScript:

```bash
npx tsc --init
```

In the generated `tsconfig.json`, make sure to include the `lite-jsx` library and set the JSX configuration:

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react",
    "jsxFactory": "h"
  },
  "include": ["src"]
}
```

Step 5: Install Lite JSX and Lite JSX Fastify plugin

Install the lite-jsx library and its Fastify plugin as project dependencies:

```bash
npm install lite-jsx
npm install @lite-jsx/fastify
```

Step 6: Add Build and Start Scripts

Add build and start scripts to the `package.json` file:

```json
{
  // other config
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/server"
  }
}
```

Step 7: Create the Fastify Server with Lite JSX Plugin

Create the Fastify server in a `src/server.js` file and add the liteJsx plugin to it:

```js
// src/server.js
const fastify = require("fastify")({ logger: true });
const { liteJsx } = require("@lite-jsx/fastify");

const { Home } = require("./home");

fastify.register(liteJsx);

fastify.get("/", (_request, reply) => {
  reply.view(Home, { message: "Hello world" });
});

fastify.listen({
  port: 3000,
});
```

Step 8: Create the Home View

Create a `src/home.tsx` file to define the Home view using Lite JSX:

```jsx
// src/home.jsx
import { h } from "lite-jsx";

export const Home = ({ message }) => <h1>{message}</h1>;
```

Step 9: Build and Run the Project

Build the project using the build script:

```bash
npm run build
```

Then, start the Fastify server using the start script:

```bash
npm run start
```

You should see the message "app is running at port: 3000" in the console. Now you can visit http://localhost:3000 in your browser to see the rendered Home view with the message "hello world".

That's it! You have successfully set up a new project with the Lite JSX Fastify Plugin, and you can now use JSX templates to render HTML in your Fastify routes. Happy coding!
