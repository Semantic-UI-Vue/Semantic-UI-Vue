import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiStepTitle',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="title">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
