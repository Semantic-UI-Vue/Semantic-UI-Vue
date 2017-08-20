import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiGrid',
  props: {
    columns: Number,
    padded: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui${this.padded ? ' padded' : ''}${this.columns ? ` ${this.columns} column` : ''} grid`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
