import { SemanticUIVueMixin } from '../../lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionTitle',
  mixins: [SemanticUIVueMixin],
  ...mixin,
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('title', this.dataActive && 'active')}
        onClick={this.toggle}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
