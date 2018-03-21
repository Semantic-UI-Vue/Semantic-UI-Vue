import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiItemContent from './ListItem';

export default {
  name: 'SuiList',
  mixins: [SemanticUIVueMixin],
  props: {
    divided: Boolean,
    horizontal: Boolean,
    items: Array,
    link: Boolean,
    relaxed: Boolean,
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();

    let children;

    if (this.items) {
      children = this.items.map(item => <SuiItemContent>{item}</SuiItemContent>);
    } else {
      children = this.$slots.default;
    }

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.size,
          this.divided && 'divided',
          this.horizontal && 'horizontal',
          this.link && 'link',
          this.relaxed && 'relaxed',
          'list',
        )}
        role="list"
      >
        {children}
      </ElementType>
    );
  },
};
