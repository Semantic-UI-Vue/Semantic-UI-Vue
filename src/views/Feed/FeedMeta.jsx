import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { FeedLike } from './';

export default {
  name: 'SuiFeedMeta',
  mixins: [listenersMixin],
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
        {...this.generateListeners()}
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
