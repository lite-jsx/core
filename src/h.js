import { stringify } from "./stringify.js";
import { sanitize } from "./sanitize.js";
import { generateTag } from "./generate-tag.js";

const formatProps = (props) => {
  return (
    props &&
    Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}="${stringify(value)}"`;
        }
        return `${key}="${sanitize(stringify(value))}"`;
      })
      .join(" ")
  );
};

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
