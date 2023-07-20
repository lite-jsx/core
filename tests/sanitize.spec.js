const { strictEqual } = require("node:assert");
const { sanitize } = require("../lib/sanitize");

module.exports = () => {
  // should sanitize special characters
  {
    strictEqual(sanitize("&"), "&amp;");
    strictEqual(sanitize("<"), "&lt;");
    strictEqual(sanitize(">"), "&gt;");
    strictEqual(sanitize('"'), "&quot;");
    strictEqual(sanitize("'"), "&apos;");
  }
};
