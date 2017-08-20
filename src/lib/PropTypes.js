export function Enum(values = [], obj = {}) {
  return { ...obj, type: String, validator: value => values.includes(value) };
}

export function ElType(type = 'div', obj = {}) {
  return { ...obj, type: [Object, String], default: type };
}
