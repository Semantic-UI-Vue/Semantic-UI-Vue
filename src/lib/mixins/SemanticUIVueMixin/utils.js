export const classes = (...classList) =>
  classList.filter(c => c && c !== true).join(' ');

const numbers = [
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
];
export const num = i => (typeof i === 'number' ? numbers[i - 1] : i);
