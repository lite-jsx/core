import { stringify } from "./stringify.js";
import { formatProps } from "./format-props.js";
import { generateTag } from "./generate-tag.js";

/**
 * Creates an HTML element with the given tag name, props, and children.
 * @param {string} tagName - The name of the HTML tag.
 * @param {Record<string, any>} props - An object containing the props to apply to the element.
 * @param {string|string[]|number|boolean|null} children - The child or children of the element.
 * @returns {JSX.Element} The HTML string representation of the element.
 */
export const h = (tagName, props, ...children) => {
  if (!tagName || tagName === null) {
    return children.join("\n");
  }

  if (typeof tagName === "function") {
    return tagName({ ...props, children });
  }

  const stringifiedChildren = children.map(stringify).join("\n");
  const stringifiedProps = formatProps(props);

  return generateTag(tagName, stringifiedProps, stringifiedChildren);
};
