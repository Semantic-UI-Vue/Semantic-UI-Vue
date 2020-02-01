import { uniq } from './underscore';

export function Enum(values = [], obj = {}) {
  let type;
  const choices = [...values];

  if (Array.isArray(obj.choices)) {
    choices.push(...obj.choices);
  }

  const types = uniq(values.map(value => value.constructor));

  if (obj.type) {
    if (Array.isArray(obj.type)) {
      if (obj.type.includes(Boolean)) choices.unshift(true);
      type = uniq([...obj.type, ...types]);
    } else {
      if (obj.type === Boolean) choices.unshift(true);
      type = uniq([obj.type, ...types]);
    }
  } else {
    type = types.length === 1 ? types[0] : types;
  }

  return {
    ...obj,
    choices,
    type,
    validator: value =>
      !types.includes(value.constructor) || choices.includes(value),
  };
}

Object.defineProperty(Enum, 'Extend', {
  value: values => (obj = {}) => Enum(values, obj),
});

Enum.State = Enum.Extend(['active', 'disabled', 'error', 'warning', 'success']);
Enum.Size = Enum.Extend([
  'mini',
  'tiny',
  'small',
  'standard',
  'medium',
  'large',
  'big',
  'huge',
  'massive',
]);
Enum.Color = Enum.Extend([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]);
Enum.Attached = Enum.Extend(['top', 'bottom']);
Enum.TextAlign = Enum.Extend(['left', 'right', 'center', 'justified']);
Enum.VerticalAlign = Enum.Extend(['top', 'middle', 'bottom']);
Enum.Social = Enum.Extend([
  'facebook',
  'twitter',
  'google',
  'google plus',
  'vk',
  'instagram',
  'linkedin',
  'youtube',
]);
Enum.Number = Enum.Extend([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
]);
Enum.Padded = Enum.Extend(['very']);
Enum.Emphasis = Enum.Extend(['secondary', 'tertiary']);
Enum.Floated = Enum.Extend(['right', 'left']);
Enum.Direction = Enum.Extend(['horizontally', 'vertically']);
Enum.RotateDirection = Enum.Extend(['clockwise', 'counterclockwise']);
Enum.Corner = Enum.Extend([
  'top left',
  'top right',
  'bottom left',
  'bottom right',
]);
