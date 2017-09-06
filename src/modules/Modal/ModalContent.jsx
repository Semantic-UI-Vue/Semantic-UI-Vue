import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiModalContent',
  props: {
    image: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('content', this.image && 'image')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'Modal',
  },
};
