import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiDivider',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="ui divider">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
