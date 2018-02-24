import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiTableBody',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this, 'tbody');
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
