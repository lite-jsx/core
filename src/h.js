function stringifyChildren(child) {
  let stringifiedChild = typeof child === "string" ? child : "";
  if (!stringifiedChild) {
    if (child instanceof String) {
      stringifiedChild = child.toString();
    }
    if (Array.isArray(child)) {
      stringifiedChild = child.join("");
    } else if (child && typeof child.toString === "function") {
      // there's a value that exposes a `toString` coercion method
      stringifiedChild = child.toString();
    }

    // coerce a number of falsey varietes to a string, but exclude null,
    // which is the standard behavior of React's JSX engine
    if (!child && child !== null) {
      stringifiedChild = `${child}`;
    }
  }
  return stringifiedChild;
}

let characters = { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "apos" };

let sanitize = (str) =>
  String(str).replace(/[&<>"']/g, (s) => `&${characters[s]};`);

export const h = (tagName, props, ...children) => {
  if (!tagName || tagName === null) {
    return children.join("\n");
  }

  if (typeof tagName === "function") {
    return tagName({ ...props, children });
  }

  const stringifiedChildren = children.map(stringifyChildren).join("\n");
  let stringifiedProps = "";
  if (props) {
    stringifiedProps = Object.entries(props)
      .map(([key, value]) => {
        if (value && typeof value === "function") {
          return `${key}="${value.toString()}"`;
        }
        return `${key}="${sanitize(value)}"`;
      })
      .join(" ");
  }

  const result = `<${sanitize(tagName)}${
    stringifiedProps ? " " + stringifiedProps : ""
  }>${stringifiedChildren}</${sanitize(tagName)}>`;

  if (tagName === "html") {
    return `<!DOCTYPE html>${result}`;
  }

  return result;
};
