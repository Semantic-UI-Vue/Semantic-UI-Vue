import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItemDescription',
  description: 'An item can contain a description with a single or multiple paragraphs',
  props: {},
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes('description')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
