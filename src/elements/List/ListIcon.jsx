import { getChildProps, getElementType } from 'src/lib';
import SuiIcon from '../Icon/Icon';

export default {
  name: 'SuiListIcon',
  components: { SuiIcon },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType is="sui-icon" {...getChildProps(this)}>
        {this.$slots.default}
      </ElementType>
    );
  },
};
