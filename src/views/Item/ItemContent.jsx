import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

function isValidAlignEnum(align) {
  Enum.VerticalAlign.choices.includes(align);
}

export default {
  name: 'SuiItemContent',
  description: 'An item can contain content',
  props: {
    verticalAlign: Enum(['top', 'middle', 'bottom'], {
      description: 'Content can specify its vertical alignment (top, middle, bottom)',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes(
          isValidAlignEnum(this.verticalAlign) && `${this.verticalAlign} aligned`,
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
