import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiMenuItem',
  mixins: [listenersMixin],
  props: {
    active: {
      type: Boolean,
      description: 'A menu item can be active.',
    },
    color: Enum.Color({
      description: 'Additional colors can be specified.',
    }),
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
    header: {
      type: Boolean,
      description: 'A menu item may include a header or may itself be a header.',
    },
    icon: {
      type: [Boolean, String],
      description: 'MenuItem can be only icon.',
    },
    link: {
      type: Boolean,
      description: 'A menu item can be link.',
    },
    position: Enum(['left', 'right'], {
      description: 'A menu item can take left or right position.',
    }),
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
