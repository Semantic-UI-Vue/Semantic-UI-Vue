import { classes, getChildProps, getElementType } from '../../lib';
import Flag from '../../elements/Flag/Flag';
import Image from '../../elements/Image/Image';

export default {
  name: 'SuiDropdownItem',
  props: {
    flag: {
      type: String,
      description: 'Shorthand for sui-flag.',
    },
    image: {
      type: Object,
      description: 'Shorthand for sui-image.',
    },
    text: {
      type: String,
      description: 'Display text.',
    },
    value: {
      type: [String, Number],
      description: 'Stored value.',
    },
    selected: {
      type: Boolean,
      default: false,
      description: 'Is item selected',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        role="option"
        class={classes(
          this.selected && 'active selected',
          'item',
        )}
      >
        {this.image && <Image {...{ props: this.image }} />}
        {this.flag && <Flag name={this.flag}/>}
        {this.text || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
