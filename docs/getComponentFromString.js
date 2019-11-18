import * as Babel from 'babel-standalone';

// const parser = require('vue-loader/lib/parser');

export default function getComponentFromString(source, name) {
  const base = {
    name,
    template: '<div></div>',
  };
  // try {
  //   const parsed = parser(source);
  //   const { code } = Babel.transform(
  //     parsed.script.content, { presets: ['es2015', 'stage-2'] },
  //   );
  //   const compiled = eval(`const exports = {};${code}`); // eslint-disable-line
  //   compiled.template = parsed.template.content;

  //   return { ...base, ...compiled };
  // } catch (e) {
  //   return base;
  // }
}
