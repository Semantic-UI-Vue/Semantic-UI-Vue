import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiMenu',
  props: {
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui menu${this.vertical ? ' vertical' : ''}${this.inverted ? ' inverted' : ''}`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
