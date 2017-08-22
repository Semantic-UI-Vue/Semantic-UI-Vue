import { classes, getChildProps, getElementType } from 'src/lib';
import { Enum } from 'src/lib/PropTypes';
import SuiMenuItem from './MenuItem';

export default {
  name: 'SuiMenu',
  components: { SuiMenuItem },
  props: {
    activeIndex: Number,
    color: Enum.Color,
    compact: Boolean,
    inverted: Boolean,
    items: Array,
    secondary: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.vertical && 'vertical',
          this.compact && 'compact',
          this.inverted && 'inverted',
          this.secondary && 'secondary',
          this.color,
          'menu',
        )}
      >
        {this.$slots.default || this.items.map((item, index) => (
          <SuiMenuItem {...{ props: item }} active={item.active || this.activeIndex === index}/>
        ))}
      </ElementType>
    );
  },
};
