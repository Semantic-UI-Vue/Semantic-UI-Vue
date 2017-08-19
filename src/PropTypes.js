// eslint-disable-next-line
export function Enum(values = [], obj = {}) {
  return { ...obj, type: String, validator: value => values.includes(value) };
}
