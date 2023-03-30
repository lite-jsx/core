export const stringify = (payload = "") => {
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
