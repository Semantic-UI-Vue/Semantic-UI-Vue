import { SemanticUIVueMixin } from '../../lib';
import Flag from '../../elements/Flag/Flag';
import Image from '../../elements/Image/Image';
import Icon from '../../elements/Icon/Icon';

export default {
  name: 'SuiDropdownItem',
  mixins: [SemanticUIVueMixin],
  props: {
    flag: {
      type: String,
      description: 'Shorthand for sui-flag.',
    },
    image: {
      type: Object,
      description: 'Shorthand for sui-image.',
    },
    icon: {
      type: String,
      description: 'Shorthand for sui-icon.',
    },
    text: {
      type: String,
      description: 'Display text.',
    },
    value: {
      type: null,
      description: 'Stored value.',
    },
    active: {
      type: Boolean,
      default: false,
      description: 'Style as the currently chosen item.',
    },
    selected: {
      type: Boolean,
      default: false,
      description: 'Is item selected',
    },
    disabled: {
      type: Boolean,
      default: false,
      description: 'A dropdown item can be disabled.',
    },
  },
  events: {
    select: {
      custom: true,
    },
  },
  methods: {
    select() {
      this.$emit('select', this.value);
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        role="option"
        class={this.classes(
          this.disabled && 'disabled',
          this.active && 'active',
          this.selected && 'selected',
          'item',
        )}
        onClick={this.select}
      >
        {this.icon && <Icon name={this.icon} />}
        {this.image && <Image {...{ props: this.image }} />}
        {this.flag && <Flag name={this.flag} />}
        {this.text || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
