import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionContent',
  mixins: [listenersMixin],
  ...mixin,
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('content', this.dataActive && 'active')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
