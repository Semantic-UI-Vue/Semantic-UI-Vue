import { classes, getChildProps, getElementType } from '../../lib';
import FeedDate from './FeedDate';

export default {
  name: 'SuiFeedSummary',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    date: {
      type: String,
      description: 'Shorthand for sui-feed-date'
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
        {this.content ? this.content : this.$slots.default}
        {this.date ?
        <FeedDate content={this.date} /> : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
