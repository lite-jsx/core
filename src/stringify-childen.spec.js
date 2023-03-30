import { strictEqual } from "node:assert";
import { stringifyChildren } from "./stringify-childen.js";

// should stringify a string child
{
  const child = "Hello, world!";
  strictEqual(stringifyChildren(child), "Hello, world!");
}

// should stringify an array of string children
{
  const children = ["Hello, ", "world!"];
  strictEqual(stringifyChildren(children), "Hello, world!");
}
