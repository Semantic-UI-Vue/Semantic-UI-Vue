import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiStepTitle',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="title">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
