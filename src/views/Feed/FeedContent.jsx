import { classes, getChildProps, getElementType } from '../../lib';
import { FeedDate, FeedSummary } from './';

export default {
  name: 'SuiFeedContent',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    date: {
      type: String,
      description: 'Shorthand for FeedDate'
    },
    summary: {
      type: String,
      description: 'Shorthand for FeedSummary'
    }
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'content',
        )}
      >
        {this.date ? <FeedDate content={this.date} /> : ''}
        {this.content ? this.content : this.$slots.default}
        {this.summary ? <FeedSummary content={this.summary} /> : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
