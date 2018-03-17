import { num, classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiMenuItem from './MenuItem';

export default {
  name: 'SuiMenu',
  components: { SuiMenuItem },
  mixins: [listenersMixin],
  props: {
    activeIndex: {
      type: Number,
      description: 'Index of the currently active item.',
    },
    color: Enum.Color({
      description: 'Additional colors can be specified.',
    }),
    compact: {
      type: Boolean,
      description: 'A menu can take up only the space necessary to fit its content.',
    },
    fixed: Enum(['right', 'left', 'bottom', 'top'], {
      description: 'A menu can be fixed to a side of its context.',
    }),
    icon: Enum(['labeled'], {
      type: Boolean,
      description: 'A menu may have just icons (bool) or labeled icons',
    }),
    inverted: {
      type: Boolean,
      description: 'A menu may have its colors inverted to show greater contrast.',
    },
    items: {
      type: Array,
      description: 'Shorthand array of props for Menu items.',
    },
    floated: Enum(['right'], {
      type: Boolean,
      description: 'A menu can be floated.',
    }),
    secondary: {
      type: Boolean,
      description: 'A menu can adjust its appearance to de-emphasize its contents.',
    },
    pointing: {
      type: Boolean,
      description: 'A menu can point to show its relationship to nearby content.',
    },
    tabular: Enum(['right'], {
      type: Boolean,
      description: 'A menu can be formatted to show tabs of information',
    }),
    text: {
      type: Boolean,
      description: 'A menu can be formatted for text content.',
    },
    vertical: {
      type: Boolean,
      description: 'A vertical menu displays elements vertically.',
    },
    widths: Enum.Number({
      description: 'A menu can have its items divided evenly.',
    }),
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
          this.fixed && `${this.fixed} fixed`,
          this.text && 'text',
          this.icon, this.icon && 'icon',
          this.inverted && 'inverted',
          this.floated, this.floated && 'floated',
          this.widths && `${num(this.widths)} item`,
          this.secondary && 'secondary',
          this.pointing && 'pointing',
          this.tabular, this.tabular && 'tabular',
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
