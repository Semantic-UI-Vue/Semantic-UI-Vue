import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiSidebarPushable',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="pushable">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
