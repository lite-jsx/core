export const sanitize = (str) => {
  const characters = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos",
  };
  return String(str).replace(/[&<>"']/g, (s) => `&${characters[s]};`);
};
