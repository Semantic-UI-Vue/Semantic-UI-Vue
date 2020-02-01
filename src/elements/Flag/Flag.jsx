import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiFlag',
  mixins: [SemanticUIVueMixin],
  props: {
    name: String,
  },
  render() {
    const ElementType = this.getElementType('i');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('flag', this.name)}
      />
    );
  },
};
