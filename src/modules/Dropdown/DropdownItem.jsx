import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdownItem',
  props: {
    text: {
      type: String,
      description: 'Display text.',
    },
    value: {
      type: [String, Number],
      description: 'Stored value.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} role="option" class={classes('item')}>
        {this.text || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
