const { sanitize } = require("./sanitize");

/**
 * Generates an HTML tag with the specified name, properties, and children.
 * @param {string} tagName - The name of the HTML tag to generate.
 * @param {string|null} props - A string of properties to add to the tag, or null if no properties are specified.
 * @param {string} children - The children of the tag, as a string.
 * @returns {string} The complete HTML tag, including any necessary opening and closing tags.
 */
const generateTag = (tagName, props, children) => {
  const result = `<${sanitize(tagName)}${
    props ? " " + props : ""
  }>${children}</${sanitize(tagName)}>`;

  return result;
};

module.exports = { generateTag };
