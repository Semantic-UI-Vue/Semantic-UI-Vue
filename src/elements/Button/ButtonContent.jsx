import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiButtonContent',
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
