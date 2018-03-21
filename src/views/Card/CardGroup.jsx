import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiCardGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    itemsPerRow: Enum.Number(),
    stackable: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.num(this.itemsPerRow),
          this.stackable && 'stackable',
          'cards',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
