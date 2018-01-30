import uniq from 'lodash/uniq';

export const classes = (...classList) => (
  uniq(classList.map((c) => {
    if (Array.isArray(c)) {
      const cond = c[0];
      if (cond || cond === '') {
        if (typeof cond !== 'string' || cond === '') {
          c.shift();
        }
        return c.join(' ');
      }
      return false;
    }
    return c;
  }).filter(c => !!c).join(' ').split(' ')).join(' ')
);

export const num = i => ([
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
][i]);
