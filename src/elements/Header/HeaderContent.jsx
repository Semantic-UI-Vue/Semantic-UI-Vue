import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiHeaderContent',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiHeader',
  },
};
