import { classes, getChildProps, getElementType } from '../../lib';
import { Icon } from '../../elements';

export default {
  name: 'SuiFeedLike',
  description: 'A feed can contain a like element',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    icon: {
      type: String,
      description: 'Shorthand for icon. Mutually exclusive with children',
    },
  },
  render() {
    const ElementType = getElementType(this, 'a');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'like',
        )}
      >
        {
          this.$slots.default || [
            this.icon && <Icon name={this.icon} />,
            this.content,
          ]
        }
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
