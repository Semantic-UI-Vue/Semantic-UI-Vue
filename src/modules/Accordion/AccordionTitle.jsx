import { classes, getChildProps, getElementType } from '../../lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionTitle',
  ...mixin,
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('title', this.dataActive && 'active')}
        onClick={this.toggle}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
