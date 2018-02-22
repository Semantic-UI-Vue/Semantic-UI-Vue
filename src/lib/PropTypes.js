import uniq from 'lodash/uniq';

const varTypes = {
  string: String,
  number: Number,
  boolean: Boolean,
};

export function Enum(values = [], obj = {}) {
  let type;
  const choices = values;
  const types = uniq(values.map(value => varTypes[typeof value]));

  if (obj.type) {
    if (Array.isArray(obj.type)) {
      if (obj.type.includes(Boolean)) choices.unshift(''); // TODO: Change to true when https://github.com/vuejs/vue/pull/7583 will be merged
      type = uniq([...obj.type, ...types]);
    } else {
      if (obj.type === Boolean) choices.unshift('');
      type = uniq([obj.type, ...types]);
    }
  } else {
    type = types.length === 1 ? types[0] : types;
  }

  return {
    ...obj,
    choices,
    type,
    validator: value => choices.includes(value),
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
