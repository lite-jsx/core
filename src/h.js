import { stringify } from "./stringify.js";

const sanitize = (str) => {
  const characters = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos",
  };
  return String(str).replace(/[&<>"']/g, (s) => `&${characters[s]};`);
};

const generateTag = (tagName, props, children) => {
  const result = `<${sanitize(tagName)}${
    props ? " " + props : ""
  }>${children}</${sanitize(tagName)}>`;

  if (tagName === "html") {
    return `<!DOCTYPE html>\n${result}`;
  }

  return result;
};

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
