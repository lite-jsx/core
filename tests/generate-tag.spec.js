import { strictEqual } from "node:assert";
import { generateTag } from "../src/generate-tag.js";

export default function () {
  // should render DOCTYPE when html tag is provided
  {
    strictEqual(
      generateTag("html", 'class="my-class"', "<title>generateTag</title>"),
      '<!DOCTYPE html>\n<html class="my-class"><title>generateTag</title></html>'
    );
  }
}
