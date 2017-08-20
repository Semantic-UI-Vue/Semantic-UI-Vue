import * as Modules from './modules';

export default (Vue) => {
  Object.values(Modules).forEach(Comp => Vue.component(Comp.name, Comp));
};
