import uniq from 'lodash/uniq';

export function Enum(values = [], obj = {}) {
  let type;
  const choices = values;

  if (obj.type && Array.isArray(obj.type)) {
    if (obj.type.includes(Boolean)) choices.push('');
    type = uniq([...obj.type, String]);
  } else if (obj.type) {
    if (obj.type === Boolean) choices.push('');
    type = [String, obj.type];
  } else {
    type = String;
  }

  return {
    ...obj,
    choices,
    type,
    validator: value => typeof value !== 'string' || choices.includes(value),
  };
}

Enum.State = Enum(['active', 'disabled', 'error', 'warning', 'success']);
Enum.Size = Enum(['mini', 'tiny', 'small', 'standard', 'medium', 'large', 'big', 'huge', 'massive']);
Enum.Color = Enum([
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
  'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]);
Enum.VerticalAlign = Enum(['top', 'middle', 'bottom']);
