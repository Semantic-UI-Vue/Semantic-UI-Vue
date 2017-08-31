import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdown',
  props: {
    button: Boolean,
    icon: String,
    floating: Boolean,
    search: Boolean,
    text: String,
  },
  data() {
    return {
      open: false,
    };
  },
  render() {
    const ElementType = getElementType(this);
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
      >
        {this.text && <div class="text" role="alert" aria-live="polite">{this.text}</div>}
        <i aria-hidden="true" class={`${this.icon || 'dropdown'} icon`}></i>
        {this.$slots.default}
      </ElementType>
    );
  },
};
