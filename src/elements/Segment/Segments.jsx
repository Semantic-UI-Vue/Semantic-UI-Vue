import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiSegments',
  mixins: [SemanticUIVueMixin],
  props: {
    piled: Boolean,
    raised: Boolean,
    stacked: Boolean,
    horizontal: Boolean,
    vertical: Boolean,
  },
  meta: {
    parent: 'SuiSegment',
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.piled && 'piled',
          this.raised && 'raised',
          this.stacked && 'stacked',
          this.horizontal && 'horizontal',
          this.vertical && 'vertical',
          'segments',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
