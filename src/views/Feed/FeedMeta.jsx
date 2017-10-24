import { classes, getChildProps, getElementType } from '../../lib';
import { FeedLike } from './';

export default {
  name: 'SuiFeedMeta',
  description: 'A feed can contain a meta',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    like: {
      type: String,
      description: 'Shorthand for SuiFeedLike',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'meta',
        )}
      >
        {
          this.$slots.default || [
            this.like && <FeedLike content={this.like} />,
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
