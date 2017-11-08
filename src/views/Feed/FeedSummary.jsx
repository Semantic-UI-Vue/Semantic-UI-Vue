import { classes, getChildProps, getElementType } from '../../lib';
import { FeedDate, FeedUser } from './';

export default {
  name: 'SuiFeedSummary',
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
