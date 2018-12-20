import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'Sticky',
  mixins: [SemanticUIVueMixin],
  props: {
    context:Boolean,
    scrollContext:String,
  },

  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          'sticky',
          this.top && 'top',
        )}
        data-percent={this.percent}
      >

        {this.$slots.default}
      </ElementType>
    );
  },
};
