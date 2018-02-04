import { classes, getChildProps, getElementType } from '../../lib';
import Image from '../../elements/Image/Image';

export default {
  name: 'SuiDropdownItem',
  props: {
    image: {
      type: Object,
      description: 'Shorthand for Image.',
    },
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
        {this.image && <Image {...{ props: this.image }} />}
        {this.text || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
