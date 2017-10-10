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
        <FeedLabel image={this.image} icon={this.icon} /> : ''}
        {this.$slots.default}
        {this.content ?
        <FeedContent content={this.content} /> : ''}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
