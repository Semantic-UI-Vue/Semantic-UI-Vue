export const classes = (...classList) => classList.filter(c => !!c).join(' ');
export const num = i => ([
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
][i]);
