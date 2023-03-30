import { strictEqual } from "node:assert";
import { sanitize } from "../src/sanitize.js";

export default function () {
  // should sanitize special characters
  {
    strictEqual(sanitize("&"), "&amp;");
    strictEqual(sanitize("<"), "&lt;");
    strictEqual(sanitize(">"), "&gt;");
    strictEqual(sanitize('"'), "&quot;");
    strictEqual(sanitize("'"), "&apos;");
  }
}
