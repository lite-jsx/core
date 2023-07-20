/**
 * Converts a JavaScript value to a string.
 * @param {unknown} payload - The value to be converted.
 * @returns {string} The string representation of the given value.
 */
const stringify = (payload = "") => {
  const types = ["string", "boolean", "number", "function"];
  const type = typeof payload;

  if (types.includes(type)) {
    return payload.toString();
  }

  if (Array.isArray(payload)) {
    return payload.map(stringify).join("");
  }

  if (payload && type === "object") {
    return JSON.stringify(payload);
  }

  return "";
};

module.exports = { stringify };
