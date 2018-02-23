import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiRevealContent',
  mixins: [listenersMixin],
  props: {
    visible: Boolean,
    hidden: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.hidden && 'hidden',
          this.visible && 'visible',
          'content',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'Reveal',
  },
};
