import * as collections from './collections';
import * as elements from './elements';
import * as modules from './modules';
import * as views from './views';

export default (Vue) => {
  Object.values({
    ...collections,
    ...elements,
    ...modules,
    ...views,
  }).forEach(Comp => Vue.component(Comp.name, Comp));
};

export * from './collections';
export * from './elements';
export * from './modules';
export * from './views';
