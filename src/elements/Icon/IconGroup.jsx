import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiIconGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    size: Enum.Size({
      description: 'Icon group size.',
    }),
  },
  render() {
    const ElementType = this.getElementType('i');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.size, 'icons')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiIcon',
  },
};
