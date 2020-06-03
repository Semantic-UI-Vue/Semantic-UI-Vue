import getChildProps from './getChildProps';
import getChildListeners from './getChildListeners';
import getElementType from './getElementType';
import { num, classes } from './utils';
import ajax from '../../ajax';
import { defaultsDeep, get } from '../../underscore';
import api from './api';

export const SemanticUIVueMixin = {
  inject: {
    _sui: {
      from: 'sui',
      default() {
        return {
          api: {},
        };
      },
    },
  },
  props: {
    sui: {
      type: Object,
      default() {
        return {
          api: defaultsDeep(this._sui ? this._sui.api : {}, api),
        };
      },
    },
  },
  methods: {
    num,
    classes,
    getEndpoint(action, params) {
      const path = get(this.sui, `api.api.${action}`);

      if (!path) {
        throw new Error(`Action '${action}' not provided`);
      }

      const baseUrl = get(this.sui, 'api.base', '');
      const endpoint = `${baseUrl}${path}`;
      return Object.keys(params).reduce(
        (url, key) => url.replace(`{${key}}`, params[key]),
        endpoint,
      );
    },
    executeAction(action, params) {
      let promise = ajax(this.sui.api.method, action, params);
      if (this.sui.api.onResponse) {
        promise = promise.then(this.sui.api.onResponse);
      }
      return promise;
    },
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
