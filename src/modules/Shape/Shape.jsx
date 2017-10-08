import { getElementType, getChildProps } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiShape',
  props: {
    cube: Boolean,
    text: Boolean,
    irregular: Boolean,
    square: Boolean,
    auto: Boolean,
  },
  render() {
    const ElementType = getElementType(this);

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.cube && '',
          this.text && '',
          'shape',
          this.irregular && '',
          this.auto && '',
          this.square && '',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
