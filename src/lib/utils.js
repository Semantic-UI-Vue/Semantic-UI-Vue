import uniq from 'lodash/uniq';

export const classes = (...classList) => (
  uniq(classList.filter(c => !!c).join(' ').split(' ')).join(' ')
);

export const num = i => ([
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
][i]);
