import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'Sticky',
  mixins: [SemanticUIVueMixin],
  
  render() {
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={`ui sticky`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
