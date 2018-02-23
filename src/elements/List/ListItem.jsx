import { getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiListIcon from './ListIcon';
import SuiListContent from './ListContent';

export default {
  name: 'SuiListItem',
  components: { SuiListContent, SuiListIcon },
  mixins: [listenersMixin],
  props: {
    content: String,
    icon: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="item" role="listitem">
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
