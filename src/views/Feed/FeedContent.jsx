import { classes, getChildProps, getElementType } from '../../lib';
import { FeedDate, FeedSummary, FeedExtra } from './';

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
    },
    extraImages: {
      type: Array,
      description: 'Shorthand for FeedExtra with images'
    },
    extraText: {
      type: String,
      description: 'Shorthand for FeedExtra with text'
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
        {(this.extraImages || this.extraText) ?
          <FeedExtra images={this.extraImages} text={true} content={this.extraText} /> : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
