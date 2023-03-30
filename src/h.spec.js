import assert, { strictEqual } from "node:assert";
import { h } from "./h.js";

const callTracker = new assert.CallTracker();

// quando o programa terminar, valida todas as chamadas
process.on("exit", () => callTracker.verify());

// should render a div with a class and some text content
{
  const result = h("div", { class: "my-class" }, "Hello, world!");
  strictEqual(result, '<div class="my-class">Hello, world!</div>');
}

// should render a div with nested elements
{
  const result = h(
    "div",
    null,
    h("p", null, "Paragraph 1"),
    h("p", null, "Paragraph 2")
  );
  strictEqual(result, "<div><p>Paragraph 1</p>\n<p>Paragraph 2</p></div>");
}

// should render a component function with props
{
  const MyComponent = ({ name }) => h("div", null, `Hello, ${name}!`);
  const result = h(MyComponent, { name: "John" });
  strictEqual(result, "<div>Hello, John!</div>");
}
