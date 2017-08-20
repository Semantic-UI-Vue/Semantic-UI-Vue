import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

const pascalCase = name => upperFirst(camelCase(name));

export default function getElementType(instance, defaultEl = 'div') {
  const tag = pascalCase(instance.$vnode.data.tag);
  if (tag === pascalCase(instance.name)) return defaultEl;

  const context = instance.$vnode.context;
  const entry = Object
    .entries(context.$options.components || {})
    .find(([name]) => pascalCase(name) === tag);

  if (entry) {
    return entry[1];
  }

  return tag;
}
