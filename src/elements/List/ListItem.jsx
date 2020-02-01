import { SemanticUIVueMixin } from '../../lib';
import SuiListIcon from './ListIcon';
import SuiListContent from './ListContent';

export default {
  name: 'SuiListItem',
  components: { SuiListContent, SuiListIcon },
  mixins: [SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'A list item can be active.',
    },
    content: String,
    icon: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('item', this.active && 'active')}
        role="listitem"
      >
        {this.icon && <SuiListIcon name={this.icon} />}
        {this.content ? (
          <SuiListContent>{this.content}</SuiListContent>
        ) : (
          this.$slots.default
        )}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};
