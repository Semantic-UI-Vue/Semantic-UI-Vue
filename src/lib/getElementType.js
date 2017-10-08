import kebabCase from 'lodash/kebabCase';

export default function getElementType(instance, defaultEl = 'div') {
  const tag = instance.$vnode && instance.$vnode.data.tag;
  if (!tag) return defaultEl;

  const context = instance.$vnode.context;
  const entry = Object
    .entries(context.$options.components || {})
    .find(([name]) => kebabCase(name) === tag);

  if (entry) {
    return entry[1];
  }

  return tag;
}
