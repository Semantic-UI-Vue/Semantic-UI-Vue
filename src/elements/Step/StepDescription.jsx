import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiStepDescription',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="description">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
