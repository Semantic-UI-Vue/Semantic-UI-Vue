import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiMenuItem',
  components: { SuiIcon },
  mixins: [listenersMixin],
  props: {
    active: Boolean,
    color: Enum.Color(),
    content: String,
    header: Boolean,
    icon: String,
    link: Boolean,
    position: Enum(['left', 'right']),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          this.active && 'active',
          this.header && 'header',
          this.link && 'link',
          this.position,
          'item',
        )}
      >
        {this.icon && <SuiIcon name={this.icon}/>}
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
