import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiItemContent',
  mixins: [listenersMixin],
  description: 'An item can contain content',
  props: {
    verticalAlign: Enum.VerticalAlign({
      description: 'Content can specify its vertical alignment',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes(
          this.verticalAlign && `${this.verticalAlign} aligned`,
          'content')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
