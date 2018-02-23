import { classes, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiImageGroup',
  mixins: [listenersMixin],
  props: {
    size: Enum.Size(),
  },
  render() {
    const ElementType = getElementType(this, 'div');

    return (
      <ElementType class={classes('ui', this.size, 'images')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiImage',
  },
};
