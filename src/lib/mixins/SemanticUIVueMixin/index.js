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
