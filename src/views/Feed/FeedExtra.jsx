import { classes, getChildProps, getElementType } from '../../lib';
import { Image } from '../../elements';

export default {
  name: 'SuiFeedExtra',
  description: 'A feed can contain an extra content',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    images: {
      type: [Array, Boolean],
      description: 'An event can contain additional information like a set of images',
    },
    text: {
      type: Boolean,
      description: 'An event can contain additional text information',
    },
  },
  render() {
    const ElementType = getElementType(this);

    const defaultContentImage = (
      Array.isArray(this.images) && this.images.map(image => <Image src={image} />)
    );

    const defaultContent = [
      this.content,
      defaultContentImage,
    ];

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.images && 'images',
          (this.text || this.content) && 'text',
          'extra',
        )}
      >
        {this.$slots.default || defaultContent}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
