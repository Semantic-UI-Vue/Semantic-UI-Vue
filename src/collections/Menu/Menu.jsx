import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiMenuItem from './MenuItem';

export default {
  name: 'SuiMenu',
  components: { SuiMenuItem },
  mixins: [SemanticUIVueMixin],
  props: {
    activeIndex: {
      type: Number,
      description: 'Index of the currently active item.',
    },
    attached: Enum.Attached({
      type: Boolean,
      description: 'A menu may be attached to other content segments.',
    }),
    color: Enum.Color({
      description: 'Additional colors can be specified.',
    }),
    compact: {
      type: Boolean,
      description:
        'A menu can take up only the space necessary to fit its content.',
    },
    fixed: Enum(['right', 'left', 'bottom', 'top'], {
      description: 'A menu can be fixed to a side of its context.',
      type: Boolean,
    }),
    icon: Enum(['labeled'], {
      type: Boolean,
      description: 'A menu may have just icons (bool) or labeled icons',
    }),
    inverted: {
      type: Boolean,
      description:
        'A menu may have its colors inverted to show greater contrast.',
    },
    items: {
      type: Array,
      description: 'Shorthand array of props for Menu items.',
    },
    floated: Enum(['right'], {
      type: Boolean,
      description: 'A menu can be floated.',
    }),
    fluid: {
      type: Boolean,
      default: false,
      description: 'A vertical menu may take the size of its container.',
    },
    secondary: {
      type: Boolean,
      description:
        'A menu can adjust its appearance to de-emphasize its contents.',
    },
    pointing: {
      type: Boolean,
      description:
        'A menu can point to show its relationship to nearby content.',
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
    borderless: {
      type: Boolean,
      default: false,
      description: 'A menu item or menu can have no borders.',
    },
    pagination: {
      type: Boolean,
      description:
        'A pagination menu is specially formatted to present links to pages of content.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.attached && `${this.attached} attached`,
          this.vertical && 'vertical',
          this.fluid && 'fluid',
          this.compact && 'compact',
          this.fixed && `${this.fixed} fixed`,
          this.text && 'text',
          this.icon,
          this.icon && 'icon',
          this.inverted && 'inverted',
          this.pagination && 'pagination',
          this.borderless && 'borderless',
          this.floated,
          this.floated && 'floated',
          this.widths && `${this.num(this.widths)} item`,
          this.secondary && 'secondary',
          this.pointing && 'pointing',
          this.tabular,
          this.tabular && 'tabular',
          this.color,
          'menu',
        )}
      >
        {this.$slots.default ||
          (this.items &&
            this.items.map((item, index) => (
              <SuiMenuItem
                {...{ props: item }}
                active={item.active || this.activeIndex === index}
              />
            )))}
      </ElementType>
    );
  },
};
