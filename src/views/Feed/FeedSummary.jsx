import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { FeedDate, FeedUser } from './';

export default {
  name: 'SuiFeedSummary',
  mixins: [listenersMixin],
  description: 'A feed can contain a summary',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    date: {
      type: String,
      description: 'Shorthand for SuiFeedDate',
    },
    user: {
      type: String,
      description: 'Shorthand for SuiFeedUser',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'summary',
        )}
      >
        {
          this.$slots.default || [
            this.user && <FeedUser content={this.user} />,
            this.content,
            this.date && <FeedDate content={this.date} />,
          ]
        }
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
