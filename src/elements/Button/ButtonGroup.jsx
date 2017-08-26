import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiButtonGroup',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', 'buttons')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
