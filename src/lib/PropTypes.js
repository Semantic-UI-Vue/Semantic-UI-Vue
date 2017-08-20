import uniq from 'lodash/uniq';

export function Enum(values = [], obj = {}) {
  let type;

  if (obj.type && Array.isArray(obj.type)) {
    type = uniq([...obj.type, String]);
  } else if (obj.type) {
    type = [String, obj.type];
  } else {
    type = String;
  }

  return { ...obj, type, validator: value => values.includes(value) };
}
