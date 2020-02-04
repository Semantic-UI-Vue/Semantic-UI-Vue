import * as collections from './collections';
import * as directives from './directives';
import * as elements from './elements';
import * as modules from './modules';
import * as views from './views';

const allComponents = {
  ...collections,
  ...elements,
  ...modules,
  ...views,
};

const SemanticUIVue = Vue => {
  Object.values(allComponents).forEach(Comp => Vue.component(Comp.name, Comp));
  Object.values(directives).forEach(directive =>
    Vue.directive(directive.name, directive),
  );
};

export default SemanticUIVue;
export * from './collections';
export * from './directives';
export * from './elements';
export * from './modules';
export * from './views';
