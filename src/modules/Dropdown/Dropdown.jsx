import { SemanticUIVueMixin } from '../../lib';
import { escapeRegExp } from '../../lib/underscore';
import { Enum } from '../../lib/PropTypes';
import Icon from '../../elements/Icon/Icon';
import Input from '../../elements/Input/Input';
import Divider from '../../elements/Divider/Divider';
import Label from '../../elements/Label/Label';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import Flag from '../../elements/Flag/Flag';
import Image from '../../elements/Image/Image';

const directions = {
  auto: 'auto',
  autoUpward: 'auto-upward',
  upward: 'upward',
  downward: 'downward',
};

const animations = {
  name: 'slide',
  down: 'down',
  up: 'up',
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export default {
  name: 'SuiDropdown',
  mixins: [SemanticUIVueMixin],
  props: {
    allowAdditions: {
      type: Boolean,
      description: 'A dropdown can allow user additions.',
    },
    button: {
      type: Boolean,
      description: 'A dropdown button style.',
    },
    icon: {
      type: String,
      description: 'Change default button to other button.',
    },
    item: {
      type: Boolean,
      description: 'A dropdown can be formatted as a Menu item.',
    },
    floating: {
      type: Boolean,
      description:
        'A dropdown menu can appear to be floating below an element.',
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
    loading: {
      type: Boolean,
      description: 'A dropdown can show that it is currently loading data.',
    },
    maxSelections: {
      type: Number,
      default: Infinity,
      description: 'Maximum possible selections when using multiple selection',
    },
    options: {
      type: Array,
      default: () => [],
      description:
        "Array of SuiDropdownItem props e.g. `{ text: '', value: '' }`",
    },
    placeholder: {
      type: String,
      description: 'Placeholder text.',
    },
    pointing: {
      type: String,
      description: 'A dropdown can be formatted so that its menu is pointing.',
    },
    search: {
      type: Boolean,
      description: 'A dropdown can have a search field to filter options.',
    },
    searchInMenu: {
      type: Object,
      description:
        'A dropdown can have a search input in dropdown menu. Should be passed an Object with SuiInput props.',
    },
    selection: {
      type: Boolean,
      description:
        'A dropdown can be used to select between choices in a form.',
    },
    simple: {
      type: Boolean,
      description: 'A dropdown that works without JavaScript',
      default: false,
    },
    text: {
      type: String,
      description: 'Text of dropdown',
    },
    value: {
      type: [Array, String, Number],
      description: 'Value of the dropdown.',
    },
    direction: Enum(Object.values(directions), {
      default: directions.auto,
      description: 'A dropdown can have a direction to open',
    }),
    openOnFocus: {
      type: Boolean,
      default: true,
      description:
        'Whether or not the menu should open when the dropdown is focused.',
    },
    closeOnBlur: {
      type: Boolean,
      default: true,
      description:
        'Whether or not the menu should close when the dropdown is blurred.',
    },
    noResultsMessage: {
      type: String,
      default: 'No results found',
      description: 'Message to display when there are no results.',
    },
    maxSelectionsMessage: {
      type: String,
      default: 'Max {selections} selections',
      description:
        'Message to display when the maximum amount of selections is reached.',
    },
    disabled: {
      type: Boolean,
      default: false,
      description: 'Whether or not the dropdown is disabled',
    },
  },
  events: {
    input: {
      custom: true,
    },
  },
  data() {
    return {
      filter: '',
      menu: null,
      open: false,
      menuDirection: null,
      focused: false,
      isMouseDown: false,
      selectedIndex: -1,
    };
  },
  computed: {
    maximumValuesSelected() {
      return this.multipleValue.length >= this.maxSelections;
    },
    downward() {
      if (
        this.direction !== directions.auto &&
        this.direction !== directions.autoUpward
      ) {
        return this.direction === directions.downward;
      }
      this.calculateMenuDirection();
      if (this.menuDirection === null) {
        return true;
      }

      if (
        (this.menuDirection.below && this.menuDirection.above) ||
        (!this.menuDirection.below && !this.menuDirection.above)
      ) {
        // Dropdown can or cannot fit in either direction favoring specified
        return this.direction === directions.auto;
      } else if (this.menuDirection.below) {
        // Dropdown can fit in context downward
        return true;
      }
      // Dropdown cannot fit below, opening upward
      return false;
    },
    animation() {
      return `${animations.name} ${
        this.downward ? animations.down : animations.up
      }`;
    },
    filteredOptions() {
      if (!this.search && !this.multiple && !this.searchInMenu) {
        return this.options;
      }
      const re = new RegExp(escapeRegExp(this.filter), 'i');
      return this.options.filter(option => {
        if (this.filter && !re.test(option.text)) {
          return false;
        }

        if (
          this.multiple &&
          (this.maximumValuesSelected ||
            this.multipleValue.indexOf(option.value) > -1)
        ) {
          return false;
        }

        return true;
      });
    },
    message() {
      if (this.filteredOptions.length === 0) {
        if (this.multiple) {
          if (this.maximumValuesSelected) {
            return this.maxSelectionsMessage.replace(
              '{selections}',
              this.maxSelections,
            );
          }
        }
        if (this.filter && !this.allowAdditions) {
          return this.noResultsMessage;
        }
      }
      return '';
    },
    menuNode() {
      return (
        <DropdownMenu>
          {[
            this.searchInMenu && [
              <Input
                {...{ props: this.searchInMenu, ref: 'searchInMenu' }}
                onInput={this.updateFilter}
                value={this.filter}
                onKeydown={this.handleSearchKeyDown}
              />,
              <Divider />,
            ],
            this.message ? (
              <div class="message">{this.message}</div>
            ) : (
              this.filteredOptions.map((option, index) => (
                <DropdownItem
                  {...{ props: option }}
                  active={
                    this.multiple
                      ? this.multipleValue.indexOf(option.value) !== -1
                      : this.value === option.value
                  }
                  class={option.class}
                  selected={this.selectedIndex === index}
                  onSelect={this.selectItem}
                />
              ))
            ),
          ]}
        </DropdownMenu>
      );
    },
    multipleValue() {
      return Array.isArray(this.value) ? this.value : [];
    },
    searchNode() {
      return (
        this.search && (
          <input
            type="text"
            aria-autocomplete="list"
            autoComplete="off"
            class="search"
            onInput={this.updateFilter}
            onKeydown={this.handleSearchKeyDown}
            ref="search"
            tabindex="0"
            value={this.filter}
          />
        )
      );
    },
    selectedNodes() {
      if (!this.multiple) {
        return null;
      }
      return this.multipleValue
        .map(value => {
          const existingOption = this.findOption(value);
          const option =
            this.allowAdditions && !existingOption
              ? { text: value }
              : existingOption;
          if (!option) {
            return null;
          }
          return (
            <Label nativeOnClick={this.handleClickOnSelectedNode}>
              {option.icon && <Icon name={option.icon} />}
              {option.image && <Image {...{ props: option.image }} />}
              {option.flag && <Flag name={option.flag} />}
              {option.text}
              <Icon
                name="delete"
                nativeOnClick={() => this.deselectItem(value)}
              />
            </Label>
          );
        })
        .filter(v => v != null);
    },
    textNode() {
      const defaultText = this.text || this.placeholder;

      const shouldHideText =
        (this.multiple && this.value && this.value.length) ||
        (!this.multiple && [null, undefined].indexOf(this.value) === -1);
      const shouldShowSelectedItem =
        !this.multiple &&
        this.open &&
        typeof this.filteredOptions[this.selectedIndex] !== 'undefined' &&
        this.filteredOptions[this.selectedIndex].value === this.value;

      const text = shouldHideText ? this.findOption(this.value) : defaultText;

      if (!text) {
        return null;
      }

      const className = this.classes(
        this.placeholder && !shouldHideText && 'default',
        !this.searchInMenu &&
          this.filter &&
          !shouldShowSelectedItem &&
          'filtered',
        'text',
      );

      const value = typeof text === 'object' ? text : { text };

      return (
        <div ref="text" class={className} role="alert" aria-live="polite">
          {value.icon && <Icon name={value.icon} />}
          {value.image && <Image {...{ props: value.image }} />}
          {value.flag && <Flag name={value.flag} />}
          {value.label && <Label {...{ props: value.label }} />}
          {value.text}
        </div>
      );
    },
  },
  watch: {
    filteredOptions() {
      this.updateSelectedIndex();
    },
    filter(val) {
      this.$emit('filtered', val);
      if (this.search) {
        this.resizeInput();
      }
    },
  },
  mounted() {
    document.body.addEventListener('click', this.closeMenu);
  },
  destroyed() {
    document.body.removeEventListener('click', this.closeMenu);
  },
  methods: {
    setOpen(value = true) {
      this.open = value;
      if (this.search && this.filteredOptions.length >= 0) {
        this.selectedIndex = 0;
      }
      if (this.menu && this.menu.setOpen) {
        this.menu.setOpen(value);
      }
    },
    closeMenu() {
      if (!this.closeOnBlur) return;
      this.setOpen(false);
    },
    deselectItem(selectedValue) {
      this.$emit(
        'input',
        this.multipleValue.filter(value => value !== selectedValue),
      );
    },
    findOption(value) {
      return this.options.find(option => option.value === value);
    },
    handleMouseDown() {
      this.isMouseDown = true;
      document.body.addEventListener(
        'mouseup',
        () => {
          this.isMouseDown = false;
        },
        {
          capture: true,
          once: true,
        },
      );
    },
    handleClick(e) {
      e.stopPropagation();
      if (this.open) {
        if (this.search && e.target === this.$refs.search) return;

        const path = e.path || (e.composedPath && e.composedPath());

        if (!path) {
          this.addEventPath();
        }

        if (
          this.searchInMenu &&
          e.target === this.$refs.searchInMenu.$refs.input
        )
          return;
        if (this.multiple && path.indexOf(this.menu.$el) !== -1) {
          this.$nextTick(() => this.focusSearch());
          return;
        }
      }
      this.focusSearch();
      this.setOpen(!this.open);
    },
    addEventPath() {
      if (!('path' in Event.prototype)) {
        Object.defineProperty(Event.prototype, 'path', {
          get() {
            const path = [];
            let currentElem = this.target;
            while (currentElem) {
              path.push(currentElem);
              currentElem = currentElem.parentElement;
            }

            if (path.indexOf(window) === -1 && path.indexOf(document) === -1) {
              path.push(document);
            }

            if (path.indexOf(window) === -1) {
              path.push(window);
            }

            return path;
          },
        });
      }
    },
    handleFocus() {
      if (this.focused) return;
      this.focused = true;
      if (!this.isMouseDown && this.openOnFocus) {
        this.setOpen(true);
      }
    },
    handleBlur(e) {
      if (this.isMouseDown || e.relatedTarget === this.$refs.search) {
        return;
      }
      this.focused = false;
      if (this.open && this.closeOnBlur) {
        this.setOpen(false);
      }
    },
    handleClickOnSelectedNode(e) {
      e.stopPropagation();
    },
    toggleFilteredText(filteredText, filter) {
      if (
        !this.searchInMenu &&
        !this.multiple &&
        !filteredText.classList.contains('filtered') &&
        filter.trim() !== ''
      ) {
        filteredText.classList.add('filtered');
      }

      if (!this.multiple && filter.trim() === '')
        filteredText.classList.remove('filtered');
    },
    handleKeyDown(e) {
      if (this.$refs.text) {
        this.toggleFilteredText(this.$refs.text, this.filter);
      }
      const KEYS = {
        ENTER: 13,
        ESCAPE: 27,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
      };

      if (!this.open) {
        if (e.keyCode !== KEYS.ENTER) {
          this.setOpen(true);
          e.preventDefault();
        }
        return;
      }
      let direction = 1;
      switch (e.keyCode) {
        case KEYS.ENTER: {
          const filter = this.filter;
          if (!this.multiple && this.selectedIndex !== -1) this.filter = '';
          if (
            this.allowAdditions &&
            this.selectedIndex === -1 &&
            filter.trim() !== ''
          ) {
            e.preventDefault();
            this.selectItem(filter);
          } else if (this.selection || this.searchInMenu || this.search) {
            if (this.selectedIndex === -1) return;
            e.preventDefault();
            if (!this.multiple) {
              this.setOpen(false);
              this.$refs.text.classList.remove('filtered');
            } else {
              this.selectItem(this.filteredOptions[this.selectedIndex].value);
            }
          }
          return;
        }
        case KEYS.ESCAPE:
          if (this.open) this.setOpen(false);
          return;
        case KEYS.UP_ARROW:
          direction = -1;
          break;
        case KEYS.DOWN_ARROW:
          break;
        default:
          return;
      }
      e.preventDefault();
      if (this.filteredOptions.length === 0) return;
      const newValue = this.selectedIndex + direction;
      if (this.filteredOptions.length <= newValue) {
        this.selectedIndex = 0;
      } else if (newValue < 0) {
        this.selectedIndex = this.filteredOptions.length - 1;
      } else {
        this.selectedIndex = newValue;
      }
      if (
        (this.selection || this.searchInMenu || this.search) &&
        !this.multiple
      ) {
        this.$emit('input', this.filteredOptions[this.selectedIndex].value);
      }
    },
    register(menu) {
      this.menu = menu;
    },
    selectItem(selectedValue) {
      if (this.multiple && this.maximumValuesSelected) return;
      const newValue = this.multiple
        ? this.multipleValue
            .filter(value => value !== selectedValue)
            .concat(selectedValue)
        : selectedValue;
      this.$emit('input', newValue);
      this.filter = '';
      if (!this.multiple) {
        this.$nextTick(this.updateSelectedIndex);
      }
    },
    updateSelectedIndex() {
      if (this.multiple) {
        this.selectedIndex =
          this.filteredOptions.length > this.selectedIndex
            ? this.selectedIndex
            : this.selectedIndex - 1;
      } else {
        this.selectedIndex = this.filteredOptions.findIndex(
          item => item.value === this.value,
        );
      }
    },
    resizeInput() {
      const sizer = this.$refs.sizer;
      sizer.innerText = this.filter;
      const width = sizer.offsetWidth;
      sizer.style.display = '';
      sizer.style.padding = '';
      this.$refs.search.style.minWidth = `${Math.ceil(width + 1)}px`;
    },
    updateFilter(event) {
      this.filter = typeof event === 'string' ? event : event.target.value;
    },
    focusSearch() {
      if (this.search) this.$refs.search.focus();
    },
    handleSearchKeyDown(e) {
      if (!this.multiple || e.keyCode !== 8 || this.filter !== '') return;
      this.multipleValue.pop();
      this.$emit('input', this.multipleValue);
    },
    calculateMenuDirection() {
      if (
        typeof window === 'undefined' ||
        !this.menu ||
        !this.menu.$el ||
        !this.open
      )
        return;

      this.menu.$el.classList.add('loading');
      this.$el.classList.remove('upward');

      const c = {
        context: {
          offset: { top: 0, left: 0 },
          scrollTop: document.body.scrollTop,
          height: document.body.offsetHeight,
        },
        menu: {
          offset: getOffset(this.menu.$el),
          height: this.menu.$el.offsetHeight,
        },
      };
      this.menu.$el.classList.remove('loading');
      this.menuDirection = {
        above: c.menu.offset.top - c.menu.height - this.$el.clientHeight >= 0,
        below: c.menu.offset.top + c.menu.height < c.context.height,
      };
    },
  },
  render() {
    const ElementType = this.getElementType('div');
    const isNativeElement =
      typeof ElementType === 'string' && !ElementType.includes('-');

    const eventHandlers = {
      [isNativeElement ? 'on' : 'nativeOn']: {
        '!mousedown': this.handleMouseDown,
        click: this.handleClick,
        '!focus': this.handleFocus,
        '!blur': this.handleBlur,
        '!keydown': this.handleKeyDown,
      },
    };

    return (
      <ElementType
        role="listbox"
        aria-expanded={this.open}
        tabindex="0"
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.button && 'button',
          this.item && 'item',
          this.floating && 'floating',
          this.fluid && 'fluid',
          this.pointing && `pointing ${this.pointing}`,
          this.loading && 'loading',
          this.labeled && 'labeled',
          this.multiple && 'multiple',
          this.selection && 'selection',
          this.search && 'search',
          this.open && 'active visible',
          this.disabled && 'disabled',
          this.simple && 'simple',
          !this.downward && directions.upward,
          'dropdown',
        )}
        {...eventHandlers}
      >
        {this.selectedNodes}
        {this.searchNode}
        {this.textNode}
        {this.icon !== null && (
          <i
            ref="icon"
            aria-hidden="true"
            class={`${this.icon || 'dropdown'} icon`}
          />
        )}
        <span class="sizer" ref="sizer" />
        {this.$slots.default || this.menuNode}
      </ElementType>
    );
  },
};
