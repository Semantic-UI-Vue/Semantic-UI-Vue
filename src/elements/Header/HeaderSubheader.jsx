import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiHeaderSubheader',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class="sub header">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiHeader',
  },
};
