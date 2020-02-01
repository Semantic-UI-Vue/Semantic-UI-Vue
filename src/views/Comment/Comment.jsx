import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiComment',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', 'comment')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
