import { kebabCase } from '../../underscore';

export default function getElementType(defaultEl = 'div') {
  const tag = this.$vnode && this.$vnode.data.tag;
  if (!tag || tag === 'component') return defaultEl;

  const context = this.$vnode.context;
  const entry = Object.entries(context.$options.components || {}).find(
    ([name]) => kebabCase(name) === tag,
  );

  if (entry) {
    return entry[1];
  }

  return tag;
}
