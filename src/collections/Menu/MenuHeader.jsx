import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMenuHeader',
  mixins: [listenersMixin],
  props: {
    active: Boolean,
    content: String,
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
