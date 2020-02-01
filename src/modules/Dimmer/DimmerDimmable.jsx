import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiDimmerDimmable',
  mixins: [SemanticUIVueMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('dimmable')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDimmer',
  },
};
