import * as collections from './collections';
import * as modules from './modules';

export default (Vue) => {
  Object.values({
    ...collections,
    ...modules,
  }).forEach(Comp => Vue.component(Comp.name, Comp));
};
