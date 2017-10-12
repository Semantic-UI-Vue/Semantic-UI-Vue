import { classes, getChildProps, getElementType } from '../../lib';
import { Image } from '../../elements';

export default {
  name: 'SuiFeedExtra',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    images: {
      type: [Array, Boolean],
      description: 'An event can contain additional information like a set of images'
    },
    text: {
      type: Boolean,
      description: 'An event can contain additional text information'
    }
  },
  render() {
    const ElementType = getElementType(this);
    const hasText = this.text || this.content;
    const hasImages = this.images && (this.images instanceof Array) && this.images.length > 0;
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.images && 'images',
          hasText && 'text',
          'extra',
        )}
      >
        {hasText ? this.content : ''}
        {this.$slots.default}
        {hasImages ?
          this.images.map(image => <Image src={image} />) : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
