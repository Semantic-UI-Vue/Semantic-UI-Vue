import getChildProps from './getChildProps';
import getChildListeners from './getChildListeners';
import getElementType from './getElementType';
import { num, classes } from './utils';

export const SemanticUIVueMixin = {
  methods: {
    num,
    classes,
    getElementType,
    getChildProps,
    getChildListeners,
    getChildPropsAndListeners() {
      const props = this.getChildProps();
      const listeners = this.getChildListeners();
      return {
        props,
        attrs: props,
        on: listeners,
      };
    },
  },
};

export const classMixin = {
  methods: {
    getUIClass() {
      const ownName = this.constructor.options && this.constructor.options.name;
      const parentName = this.$parent && this.$parent.constructor.options &&
        this.$parent.constructor.options.name;
      const inGroup = ownName && parentName && parentName.match(new RegExp(`^${ownName}.*Group$`));
      return inGroup ? '' : 'ui';
    },
  },
};
