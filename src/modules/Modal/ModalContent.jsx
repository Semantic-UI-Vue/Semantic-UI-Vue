import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiModalContent',
  mixins: [listenersMixin],
  props: {
    image: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
