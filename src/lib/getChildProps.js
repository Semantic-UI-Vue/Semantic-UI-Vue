import Vue from 'vue';
import camelCase from 'lodash/camelCase';
import getElementType from './getElementType';

export default function getChildProps(instance) {
  if (!(instance.$vnode && instance.$vnode.data.attrs)) return {};

  const el = getElementType(instance);
  let childProps;

  if (typeof el === 'string') {
    const foundEntry = Object
      .entries(Vue.options.components)
      .find(([name]) => camelCase(el) === camelCase(name));
    if (!foundEntry) return {};

    childProps = foundEntry[1].options.props;
  } else if (typeof el === 'object') {
    childProps = el.props;
  } else {
    return {};
  }

  const obj = Object.entries(instance.$vnode.data.attrs)
    .filter(([name]) => camelCase(name) in childProps)
    .map(([name, value]) => {
      const ccName = camelCase(name);
      if (childProps[ccName].type === Boolean) {
        if (value === false) return [ccName, false];
        return [ccName, true];
      }

      return [ccName, value];
    })
    .reduce((acc, [name, value]) => ({ ...acc, [name]: value }), {});

  return { props: obj, attrs: obj };
}
