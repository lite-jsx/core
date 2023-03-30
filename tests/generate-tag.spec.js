import { strictEqual } from "node:assert";
import { generateTag } from "../src/generate-tag.js";

export default function () {
  // should render DOCTYPE when html tag is provided
  {
    strictEqual(
      generateTag("html", 'class="my-class"', "<title>hello</title>"),
      '<!DOCTYPE html>\n<html class="my-class"><title>hello</title></html>'
    );
  }

  // should render correct tag when valid params are provided
  {
    strictEqual(
      generateTag("h1", 'class="my-class"', "hello"),
      '<h1 class="my-class">hello</h1>'
    );
  }
}
