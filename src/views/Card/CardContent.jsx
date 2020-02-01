import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCardContent',
  mixins: [SemanticUIVueMixin],
  props: {
    extra: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.extra && 'extra', 'content')}
      >
        {this.$slots.default}
        {this.$slots.right && (
          <div class="right floated">{this.$slots.right}</div>
        )}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
