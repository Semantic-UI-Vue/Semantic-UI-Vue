import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiItemDescription',
  mixins: [listenersMixin],
  description: 'An item can contain a description with a single or multiple paragraphs',
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
