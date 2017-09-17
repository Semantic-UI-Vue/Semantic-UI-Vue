import * as collections from './collections';
import * as directives from './directives';
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

  Object.values(directives).forEach(directive => Vue.directive(directive.name, directive));
};

export * from './collections';
export * from './directives';
export * from './elements';
export * from './modules';
export * from './views';
