import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiComment',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'comment',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
