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

  return { ...obj, choices: values, type, validator: value => values.includes(value) };
}

Enum.Size = Enum(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']);
Enum.Color = Enum([
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
  'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]);
