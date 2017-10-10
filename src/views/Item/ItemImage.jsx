import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiItemImage',
  description: 'An item can contain an image',
  props: {
    src: {
      type: String,
      required: true,
      description: 'Specifies the URL of the image',
    },
    size: Enum(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], {
      type: String,
      description: 'An image may appear at different sizes (mini, tiny, small, medium, large, big, huge, massive)',
    }),
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location',
    },
  },
  render() {
    const ElementType = (this.href ? 'a' : getElementType(this));
    return (
      <ElementType
        {...getChildProps(this) }
        href={this.href}
        class={classes(
            this.size && `ui ${this.size}`,
            'image',
        )}
      >
        <img src={this.src} />
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
