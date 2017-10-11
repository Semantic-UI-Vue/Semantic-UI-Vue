import { classes, getChildProps, getElementType } from '../../lib';
import { FeedLabel, FeedContent } from './';

export default {
  name: 'SuiFeedEvent',
  props: {
    content: {
      type: String,
      description: 'Shorthand for FeedContent'
    },
    image: {
      type: String,
      description: 'An event can contain image label'
    },
    icon: {
      type: String,
      description: 'An event can contain icon label'
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
          'event',
        )}
      >
        {(this.image || this.icon) ?
        <FeedLabel
          image={this.image}
          icon={this.icon} /> : ''}
        {this.$slots.default}
        {(this.content || this.date || this.summary) ?
        <FeedContent
          content={this.content}
          date={this.date}
          summary={this.summary}
        /> : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
