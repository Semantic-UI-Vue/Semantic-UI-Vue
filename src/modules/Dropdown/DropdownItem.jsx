import { SemanticUIVueMixin } from '../../lib';
import Flag from '../../elements/Flag/Flag';
import Image from '../../elements/Image/Image';
import Icon from '../../elements/Icon/Icon';
import Label from '../../elements/Label/Label';
import popupMixin from '../../lib/mixins/popupMixin';

export default {
  name: 'SuiDropdownItem',
  mixins: [SemanticUIVueMixin, popupMixin],
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
    label: {
      type: Object,
      description: 'Shorthand for sui-label',
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
  data() {
    return {
      open: false,
    };
  },
  methods: {
    select() {
      this.$emit('select', this.value);
    },
    register(menu) {
      this.menu = menu;
    },
    onClick(e) {
      e.stopPropagation();
      this.select();
      if (this.menu) {
        this.menu.toggleMenu();
      }
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
        onClick={this.onClick}
      >
        {this.icon && <Icon name={this.icon}/>}
        {this.image && <Image {...{ props: this.image }} />}
        {this.flag && <Flag name={this.flag}/>}
        {this.label && <Label {...{ props: this.label }}/>}
        {this.text || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
