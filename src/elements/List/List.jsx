import { getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiList',
  props: {
    horizontal: Boolean,
    link: Boolean,
    size: Enum.Size,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui${this.size ? ` ${this.size}` : ''}${this.horizontal ? ' horizontal' : ''}${this.link ? ' link' : ''} list`}
        role="list"
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
