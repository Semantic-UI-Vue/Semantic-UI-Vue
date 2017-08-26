import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiIcon',
  props: {
    color: Enum.Color,
    disabled: Boolean,
    fitted: Boolean,
    name: {
      type: String,
      required: true,
    },
    loading: Boolean,
    size: Enum.Size,
  },
  render() {
    const ElementType = getElementType(this, 'i');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.color,
          this.name,
          this.size,
          this.disabled && 'disabled',
          this.fitted && 'fitted',
          this.loading && 'loading',
          'icon',
        )}
      />
    );
  },
};
