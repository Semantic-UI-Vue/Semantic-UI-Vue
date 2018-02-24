import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiButtonContent',
  mixins: [listenersMixin],
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
    const ElementType = getElementType(this, 'div');

    const classList = classes(
      this.visible && 'visible',
      this.hidden && 'hidden',
      'content',
    );

    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
