import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiItemContent from './ListItem';

export default {
  name: 'SuiList',
  mixins: [SemanticUIVueMixin],
  props: {
    bulleted: {
      type: Boolean,
      description: 'A list can mark items with a bullet.',
    },
    divided: Boolean,
    horizontal: Boolean,
    items: Array,
    link: Boolean,
    relaxed: Boolean,
    inverted: {
      type: Boolean,
      description: 'A list can be inverted to appear on a dark background.',
    },
    ordered: {
      type: Boolean,
      description: 'A list can be ordered numerically.',
    },
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();

    let children;

    if (this.items) {
      children = this.items.map(item => (
        <SuiItemContent>{item}</SuiItemContent>
      ));
    } else {
      children = this.$slots.default;
    }

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.size,
          this.bulleted && 'bulleted',
          this.divided && 'divided',
          this.ordered && 'ordered',
          this.horizontal && 'horizontal',
          this.link && 'link',
          this.relaxed && 'relaxed',
          this.inverted && 'inverted',
          'list',
        )}
        role="list"
      >
        {children}
      </ElementType>
    );
  },
};
