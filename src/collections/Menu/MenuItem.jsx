import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiMenuItem',
  mixins: [SemanticUIVueMixin],
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
      description:
        'A menu item may include a header or may itself be a header.',
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
    disabled: {
      type: Boolean,
      description: 'A menu item can be disabled.',
    },
    fitted: Enum(['horizontally', 'vertically'], {
      type: Boolean,
      description:
        'A menu item or menu can remove element padding, vertically or horizontally..',
    }),
  },
  render() {
    const ElementType = this.getElementType(this.link ? 'a' : 'div');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.disabled && 'disabled',
          this.active && 'active',
          this.fitted,
          this.fitted && 'fitted',
          this.header && 'header',
          this.link && 'link',
          this.icon && 'icon',
          this.position,
          'item',
        )}
      >
        {typeof this.icon === 'string' && <SuiIcon name={this.icon} />}
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
