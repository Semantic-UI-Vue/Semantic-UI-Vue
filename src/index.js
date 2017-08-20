import * as Modules from './modules';

export default (Vue) => {
  Object.values(Modules).forEach(Comp => Vue.use(Comp));
};
