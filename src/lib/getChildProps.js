import Vue from 'vue';
import camelCase from 'lodash/camelCase';

export default function getChildProps() {
  if (!(this.$vnode && this.$vnode.data.attrs)) return {};

  const el = this.getElementType();
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

  const obj = Object.entries(this.$vnode.data.attrs)
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

  return obj;
}
