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

Object.defineProperty(Enum, 'Extend', {
  value: values => (obj = {}) => Enum(values, obj),
});

Enum.State = Enum.Extend(['active', 'disabled', 'error', 'warning', 'success']);
Enum.Size = Enum.Extend(['mini', 'tiny', 'small', 'standard', 'medium', 'large', 'big', 'huge', 'massive']);
Enum.Color = Enum.Extend([
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
  'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]);
Enum.TextAlign = Enum.Extend(['left', 'right', 'center', 'justify']);
Enum.VerticalAlign = Enum.Extend(['top', 'middle', 'bottom']);
Enum.Social = Enum.Extend(['facebook', 'twitter', 'google', 'google plus', 'vk', 'instagram', 'linkedin', 'youtube']);
