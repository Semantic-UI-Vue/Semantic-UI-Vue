import { SemanticUIVueMixin } from '../../lib';
import SuiListIcon from './ListIcon';
import SuiListContent from './ListContent';

export default {
  name: 'SuiListItem',
  components: { SuiListContent, SuiListIcon },
  mixins: [SemanticUIVueMixin],
  props: {
    content: String,
    icon: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="item" role="listitem">
        {this.icon && <SuiListIcon name={this.icon} />}
        {this.content ? (
          <SuiListContent>{this.content}</SuiListContent>
        ) : this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};
