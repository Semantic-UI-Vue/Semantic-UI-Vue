import { classes, getChildProps, getElementType } from '../../lib';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

export default {
  name: 'SuiDropdown',
  props: {
    button: {
      type: Boolean,
      description: 'A dropdown button style.',
    },
    icon: {
      type: String,
      description: 'Change default button to other button.',
    },
    floating: {
      type: Boolean,
      description: 'A dropdown menu can appear to be floating below an element.',
    },
    options: {
      type: Array,
      description: "Array of SuiDropdownItem props e.g. `{ text: '', value: '' }`",
    },
    placeholder: {
      type: String,
      description: 'Placeholder text.',
    },
    search: Boolean,
    selection: {
      type: Boolean,
      description: 'A dropdown can be used to select between choices in a form.',
    },
    text: {
      type: String,
      description: 'Text of dropdown',
    },
  },
  data() {
    return {
      open: false,
      menu: null,
    };
  },
  mounted() {
    document.body.addEventListener('click', this.closeMenu);
  },
  methods: {
    register(menu) {
      this.menu = menu;
    },
    openMenu(e) {
      if (
        e.target === this.$el ||
        e.target === this.$refs.text ||
        e.target === this.$refs.icon
      ) {
        e.stopPropagation();
        this.menu.setOpen(true);
      }
    },
    closeMenu() {
      this.menu.setOpen(false);
    },
  },
  render() {
    const ElementType = getElementType(this, this.button ? 'button' : 'div');
    const text = this.text || this.placeholder;

    const renderMenu = () => {
      if (this.$slots.default) {
        return this.$slots.default;
      }

      return (
        <DropdownMenu>
          {this.options.map(option => <DropdownItem {...option} />)}
        </DropdownMenu>
      );
    };

    return (
      <ElementType
        role="listbox"
        aria-expanded={this.open}
        tabindex="0"
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.button && 'button',
          this.floating && 'floating',
          this.selection && 'selection',
          this.search && 'search',
          this.open && 'active visible',
          'dropdown',
        )}
        onClick={this.openMenu}
        nativeOnClick={this.openMenu}
      >
        {text && <div ref="text" class="text" role="alert" aria-live="polite">{text}</div>}
        <i ref="icon" aria-hidden="true" class={`${this.icon || 'dropdown'} icon`} />
        {renderMenu()}
      </ElementType>
    );
  },
};
