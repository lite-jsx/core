const { strictEqual } = require("node:assert");
const { generateTag } = require("../src/generate-tag");

module.exports = () => {
  // should render correct tag when valid params are provided
  {
    strictEqual(
      generateTag("h1", 'class="my-class"', "hello"),
      '<h1 class="my-class">hello</h1>'
    );
  }

  // should render tag without any props when props are not provided
  {
    strictEqual(generateTag("h1", null, "hello"), "<h1>hello</h1>");
    strictEqual(generateTag("h1", undefined, "hello"), "<h1>hello</h1>");
    strictEqual(generateTag("h1", "", "hello"), "<h1>hello</h1>");
    strictEqual(generateTag("h1", false, "hello"), "<h1>hello</h1>");
  }

  // should render tag without any children when children are not provided
  {
    strictEqual(
      generateTag("h1", 'class="my-class"', null),
      '<h1 class="my-class">null</h1>'
    );
    strictEqual(
      generateTag("h1", 'class="my-class"', undefined),
      '<h1 class="my-class">undefined</h1>'
    );
    strictEqual(
      generateTag("h1", 'class="my-class"', ""),
      '<h1 class="my-class"></h1>'
    );
    strictEqual(
      generateTag("h1", 'class="my-class"', false),
      '<h1 class="my-class">false</h1>'
    );
  }
};
