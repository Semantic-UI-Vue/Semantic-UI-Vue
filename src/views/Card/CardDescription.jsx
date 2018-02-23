import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCardDescription',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('description')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
