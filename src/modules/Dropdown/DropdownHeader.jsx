import { SemanticUIVueMixin } from '../../lib';
import Icon from '../../elements/Icon/Icon';

export default {
  name: 'SuiDropdownHeader',
  mixins: [SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
    icon: {
      type: String,
      description: 'Shorthand for `sui-icon`.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('header')}
      >
        {this.icon && <Icon name={this.icon} />}
        {this.content || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
