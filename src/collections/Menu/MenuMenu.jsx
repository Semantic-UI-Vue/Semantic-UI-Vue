import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiMenuMenu',
  mixins: [SemanticUIVueMixin],
  props: {
    position: Enum(['left', 'center', 'right'], {
      description: 'A sub menu can take left, center or right position',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class={this.classes(this.position, 'menu')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
