import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiDivider',
  mixins: [listenersMixin],
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.clearing && 'clearing',
          this.fitted && 'fitted',
          this.hidden && 'hidden',
          this.horizontal && 'horizontal',
          this.vertical && 'vertical',
          this.inverted && 'inverted',
          'divider',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
