import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiLabelDetail',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class="detail">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiLabel',
  },
};
