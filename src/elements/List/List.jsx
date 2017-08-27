import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiItemContent from './ListItem';

export default {
  name: 'SuiList',
  props: {
    divided: Boolean,
    horizontal: Boolean,
    items: Array,
    link: Boolean,
    relaxed: Boolean,
    size: Enum.Size,
  },
  render() {
    const ElementType = getElementType(this);

    let children;

    if (this.items) {
      children = this.items.map(item => <SuiItemContent>{item}</SuiItemContent>);
    } else {
      children = this.$slots.default;
    }

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.size,
          this.divided && 'divided',
          this.horizontal && 'horizontal',
          this.link && 'link',
          this.relaxed && 'relaxed',
          'list',
        )}
        role="list"
      >
        {children}
      </ElementType>
    );
  },
};
