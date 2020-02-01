import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiModalHeader',
  mixins: [SemanticUIVueMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('header')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiModal',
  },
};
