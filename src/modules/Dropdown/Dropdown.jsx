import { classes, getChildProps, getElementType } from '../../lib';

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
    search: Boolean,
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
          this.search && 'search',
          this.open && 'active visible',
          'icon',
          'dropdown',
        )}
        onClick={this.openMenu}
        nativeOnClick={this.openMenu}
      >
        {this.text &&
          <div ref="text" class="text" role="alert" aria-live="polite">{this.text}</div>
        }
        <i ref="icon" aria-hidden="true" class={`${this.icon || 'dropdown'} icon`}></i>
        {this.$slots.default}
      </ElementType>
    );
  },
};
