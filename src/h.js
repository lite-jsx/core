import { stringify } from "./stringify.js";
import { formatProps } from "./format-props.js";
import { generateTag } from "./generate-tag.js";

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
