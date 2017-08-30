import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdown',
  props: {
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
          this.open && 'active visible',
          'dropdown',
        )}
      >
        <div class="text" role="alert" aria-live="polite">{this.text}</div>
        <i aria-hidden="true" class="dropdown icon"></i>
        {this.$slots.default}
      </ElementType>
    );
  },
};
