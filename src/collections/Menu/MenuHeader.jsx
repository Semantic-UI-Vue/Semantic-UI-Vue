import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMenuHeader',
  mixins: [listenersMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class="header">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
