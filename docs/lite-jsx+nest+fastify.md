# How to use Lite JSX + Nest + Fastify

Step 1: Set Up a New Project

First, create a new project folder and navigate into it:

```bash
nest new <project-name>
mkdir <project-name>
cd <project-name>
```

Step 2: Install Lite JSX and Lite JSX Fastify plugin

Install the lite-jsx library and its Fastify plugin as project dependencies:

```bash
npm install lite-jsx @lite-jsx/fastify @nestjs/platform-fastify
```

Step 3: Configure TypeScript

In the generated `tsconfig.json`, make sure to include the `lite-jsx` library and set the JSX configuration:

```json
// tsconfig.json
{
  "compilerOptions": {
    // other options
    "jsx": "react",
    "jsxFactory": "h"
  }
}
```

Step 4: Create the Fastify Server with Lite JSX plugin

Create the Fastify server in a `src/main.ts` file and add the liteJsx plugin to it:

```ts
// src/main.ts
import { liteJsx } from "@lite-jsx/fastify";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.register(liteJsx);
  await app.listen(3000);
}
bootstrap();
```

Step 5: Create the Home View

Create a `src/home.tsx` file to define the Home view using Lite JSX:

```tsx
// src/home.tsx
import { h } from "lite-jsx";

export const Home = ({ message }: { message: string }) => <h1>{message}</h1>;
```

Step 6: Add the Home component to AppController

Add the `View` decorator to `AppController`:

```ts
// src/app.controller.ts
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { View } from "lite-jsx";
import { Home } from "./home";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @View(Home)
  getHello() {
    return this.appService.getHello();
  }
}
```

```ts
// src/app.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello() {
    return { message: "Hello World!" };
  }
}
```

Step 9: Run the Project

Start the Nest + Express server using the start script:

```bash
npm run start:dev
```

You should see the message "app is running at port: 3000" in the console. Now you can visit http://localhost:3000 in your browser to see the rendered Home view with the message "hello world".

That's it! You have successfully set up a new project with the Lite JSX Express Middleware, and you can now use JSX templates to render HTML in your Express routes. Happy coding!
