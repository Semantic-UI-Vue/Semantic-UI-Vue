import escapeRegExp from 'lodash/escapeRegExp';
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
    fluid: {
      type: Boolean,
      description: 'A dropdown can take the full width of its parent.',
    },
    options: {
      type: Array,
      description: "Array of SuiDropdownItem props e.g. `{ text: '', value: '' }`",
    },
    placeholder: {
      type: String,
      description: 'Placeholder text.',
    },
    search: {
      type: Boolean,
      description: 'A dropdown can have a search field to filter options.',
    },
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
      filter: '',
      menu: null,
      open: false,
    };
  },
  computed: {
    filteredOptions() {
      const re = new RegExp(escapeRegExp(this.filter), 'i');
      return this.options.filter(({ text }) => text.match(re));
    },
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
        e.target === this.$refs.icon ||
        e.target === this.$refs.search ||
        e.target === this.$refs.text
      ) {
        e.stopPropagation();
        this.menu.setOpen(true);
        this.open = true;
      }
    },
    closeMenu() {
      this.menu.setOpen(false);
      this.open = false;
    },
  },
  render() {
    const ElementType = getElementType(this, this.button ? 'button' : 'div');

    const renderMenu = () => {
      if (this.$slots.default) {
        return this.$slots.default;
      }

      return (
        <DropdownMenu>
          {this.filteredOptions.map(option => <DropdownItem {...{ props: option }} />)}
        </DropdownMenu>
      );
    };

    const renderText = () => {
      const text = this.text || this.placeholder;
      if (!text) {
        return null;
      }
      const className = `${this.placeholder ? 'default ' : ''}text`;
      return <div ref="text" class={className} role="alert" aria-live="polite">{text}</div>;
    };

    const renderSearch = () => this.search && (
      <input
        type="text"
        aria-autocomplete="list"
        autoComplete="off"
        class="search"
        onClick={this.openMenu}
        onInput={(event) => { this.filter = event.target.value; }}
        ref="search"
        tabindex="0"
        value={this.filter}
      />
    );

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
          this.fluid && 'fluid',
          this.selection && 'selection',
          this.search && 'search',
          this.open && 'active visible',
          'dropdown',
        )}
        nativeOnClick={this.openMenu}
        onClick={this.openMenu}
      >
        {renderSearch()}
        {renderText()}
        <i ref="icon" aria-hidden="true" class={`${this.icon || 'dropdown'} icon`} />
        {renderMenu()}
      </ElementType>
    );
  },
};
