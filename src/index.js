import * as collections from './collections';
import * as elements from './elements';
import * as modules from './modules';

export default (Vue) => {
  Object.values({
    ...collections,
    ...elements,
    ...modules,
  }).forEach(Comp => Vue.component(Comp.name, Comp));
};
