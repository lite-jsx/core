import { strictEqual } from "node:assert";
import { stringify } from "../src/stringify.js";

export default function () {
  // should stringify a string child
  {
    const child = "Hello, world!";
    strictEqual(stringify(child), "Hello, world!");
  }

  // should stringify an array of string children
  {
    const children = ["Hello, ", "world!"];
    strictEqual(stringify(children), "Hello, world!");
  }

  // should stringify a number child
  {
    const child = 42;
    strictEqual(stringify(child), "42");
  }

  // should stringify a function child
  {
    const child = () => console.log("Hello, world!");
    strictEqual(stringify(child), '() => console.log("Hello, world!")');
  }

  // should stringify a empty child
  {
    const child = "";
    strictEqual(stringify(child), "");
  }

  // should stringify a boolean child
  {
    strictEqual(stringify(false), "false");
    strictEqual(stringify(true), "true");
  }
}
