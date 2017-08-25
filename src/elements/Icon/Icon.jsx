import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiIcon',
  props: {
    color: Enum.Color,
    fitted: Boolean,
    name: {
      type: String,
      required: true,
    },
    size: Enum.Size,
  },
  render() {
    const ElementType = getElementType(this, 'i');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.color, this.name, this.size, this.fitted && 'fitted', 'icon')}
      />
    );
  },
};
