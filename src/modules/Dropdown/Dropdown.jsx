import escapeRegExp from 'lodash/escapeRegExp';
import { classes, getChildProps, getElementType } from '../../lib';
import Icon from '../../elements/Icon/Icon';
import Label from '../../elements/Label/Label';
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
    labeled: {
      type: Boolean,
      description: 'A dropdown can be labeled.',
    },
    multiple: {
      type: Boolean,
      description: 'A selection dropdown can allow multiple selections.',
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
    value: {
      type: [Array, String, Number],
      description: 'Value of the dropdown.',
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
      return this.options.filter((option) => {
        if (!option.text.match(re)) {
          return false;
        }

        if (this.multiple && this.multipleValue.indexOf(option.value) > -1) {
          return false;
        }

        return true;
      });
    },
    menuNode() {
      if (this.$slots.default) {
        return this.$slots.default;
      }

      return (
        <DropdownMenu>
          {this.filteredOptions.map(option => (
            <DropdownItem
              {...{ props: option }}
              data-value={JSON.stringify(option.value)}
              nativeOnClick={this.selectItem}
            />
          ))}
        </DropdownMenu>
      );
    },
    multipleValue() {
      return Array.isArray(this.value) ? this.value : [];
    },
    searchNode() {
      return this.search && (
        <input
          type="text"
          aria-autocomplete="list"
          autoComplete="off"
          class="search"
          onClick={this.openMenu}
          onInput={this.updateFilter}
          ref="search"
          tabindex="0"
          value={this.filter}
        />
      );
    },
    selectedNodes() {
      if (!this.multiple) {
        return null;
      }

      return this.multipleValue.map(value => (
        <Label>
          {this.findOption(value)}
          <Icon
            name="delete"
            data-value={JSON.stringify(value)}
            nativeOnClick={this.deselectItem}
          />
        </Label>
      ));
    },
    textNode() {
      const defaultText = this.text || this.placeholder;

      const shouldHideText =
        (this.multiple && this.value && this.value.length) ||
        (!this.multiple && this.value);

      const text = shouldHideText ?
        this.findOption(this.value) :
        defaultText;

      if (!text) {
        return null;
      }

      const className = classes(
        this.placeholder && !shouldHideText && 'default',
        this.filter && 'filtered',
        'text',
      );

      return <div ref="text" class={className} role="alert" aria-live="polite">{text}</div>;
    },
  },
  mounted() {
    document.body.addEventListener('click', this.closeMenu);
  },
  methods: {
    closeMenu() {
      this.menu.setOpen(false);
      this.open = false;
    },
    deselectItem(event) {
      const selectedValue = JSON.parse(event.currentTarget.dataset.value);
      this.$emit('input', this.multipleValue.filter(value => value !== selectedValue));
    },
    findOption(value) {
      return this.options.find(option => option.value === value);
    },
    openMenu(e) {
      if (
        e.target === this.$el ||
        e.target === this.$refs.icon ||
        e.target === this.$refs.search ||
        e.target === this.$refs.text
      ) {
        if (this.search && e.target !== this.$refs.search) {
          this.$refs.search.focus();
        }

        e.stopPropagation();
        this.menu.setOpen(true);
        this.open = true;
      }
    },
    register(menu) {
      this.menu = menu;
    },
    selectItem(event) {
      const selectedValue = JSON.parse(event.currentTarget.dataset.value);
      const newValue = this.multiple ? (
        this.multipleValue.filter(value => value !== selectedValue).concat([selectedValue])
      ) : selectedValue;
      this.filter = '';
      this.$emit('input', newValue);
    },
    updateFilter(event) {
      this.filter = event.target.value;
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
          this.fluid && 'fluid',
          this.labeled && 'labeled',
          this.multiple && 'multiple',
          this.selection && 'selection',
          this.search && 'search',
          this.open && 'active visible',
          'dropdown',
        )}
        nativeOnClick={this.openMenu}
        onClick={this.openMenu}
      >
        {this.selectedNodes}
        {this.searchNode}
        {this.textNode}
        <i ref="icon" aria-hidden="true" class={`${this.icon || 'dropdown'} icon`} />
        {this.menuNode}
      </ElementType>
    );
  },
};
