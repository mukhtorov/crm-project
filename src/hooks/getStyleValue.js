export const getValue = (value, def) => {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return `${value}px`;
    default:
      return def;
  }
};

export default getValue;
