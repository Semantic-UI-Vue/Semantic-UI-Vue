import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiDivider',
  mixins: [SemanticUIVueMixin],
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.clearing && 'clearing',
          this.fitted && 'fitted',
          this.hidden && 'hidden',
          this.horizontal && 'horizontal',
          this.vertical && 'vertical',
          this.inverted && 'inverted',
          'divider',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
