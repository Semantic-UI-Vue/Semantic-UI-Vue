import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionTitle',
  mixins: [listenersMixin],
  ...mixin,
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes('title', this.dataActive && 'active')}
        onClick={this.toggle}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
