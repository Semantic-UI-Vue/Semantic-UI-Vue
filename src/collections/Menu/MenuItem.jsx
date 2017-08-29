import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiMenuItem',
  components: { SuiIcon },
  props: {
    active: Boolean,
    color: Enum.Color,
    content: String,
    icon: String,
    link: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.active && 'active', this.link && 'link', 'item')}
      >
        {this.icon && <SuiIcon name={this.icon} />}
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
