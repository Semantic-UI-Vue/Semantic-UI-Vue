import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiButtonContent',
  mixins: [SemanticUIVueMixin],
  props: {
    visible: {
      type: Boolean,
      description: 'Visible content of button',
    },
    hidden: {
      type: Boolean,
      description: 'Hidden content of button',
    },
  },
  render() {
    const ElementType = this.getElementType('div');

    const classList = this.classes(
      this.visible && 'visible',
      this.hidden && 'hidden',
      'content',
    );

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={classList}
      >
        {this.content || this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiButton',
  },
};
