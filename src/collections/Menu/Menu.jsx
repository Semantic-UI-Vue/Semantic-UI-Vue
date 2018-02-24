import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiMenuItem from './MenuItem';

export default {
  name: 'SuiMenu',
  components: { SuiMenuItem },
  mixins: [listenersMixin],
  props: {
    activeIndex: Number,
    color: Enum.Color(),
    compact: Boolean,
    fixed: Boolean,
    icon: Boolean,
    inverted: Boolean,
    items: Array,
    right: Boolean,
    secondary: Boolean,
    pointing: Boolean,
    tabular: Boolean,
    text: Boolean,
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
          this.vertical && 'vertical',
          this.compact && 'compact',
          this.fixed && 'fixed',
          this.text && 'text',
          this.icon && 'icon',
          this.inverted && 'inverted',
          this.right && 'right',
          this.secondary && 'secondary',
          this.pointing && 'pointing',
          this.tabular && 'tabular',
          this.color,
          'menu',
        )}
      >
        {this.$slots.default || (this.items && this.items.map((item, index) => (
          <SuiMenuItem {...{ props: item }} active={item.active || this.activeIndex === index}/>
        )))}
      </ElementType>
    );
  },
};
