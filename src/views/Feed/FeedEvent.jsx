import { SemanticUIVueMixin } from '../../lib';
import { FeedLabel, FeedContent } from './';

export default {
  name: 'SuiFeedEvent',
  mixins: [SemanticUIVueMixin],
  description: 'A feed contains an event',
  props: {
    content: {
      type: String,
      description: 'Shorthand for SuiFeedContent',
    },
    image: {
      type: String,
      description: 'An event can contain image label',
    },
    icon: {
      type: String,
      description: 'An event can contain icon label',
    },
    date: {
      type: String,
      description: 'Shorthand for SuiFeedDate',
    },
    summary: {
      type: String,
      description: 'Shorthand for SuiFeedSummary',
    },
    extraImages: {
      type: Array,
      description: 'Shorthand for SuiFeedExtra with images',
    },
    extraText: {
      type: String,
      description: 'Shorthand for SuiFeedExtra with text',
    },
    meta: {
      type: String,
      description: 'Shorthand for SuiFeedMeta',
    },
  },
  render() {
    const ElementType = this.getElementType();
    const hasContent =
      this.content ||
      this.date ||
      this.summary ||
      this.extraImages ||
      this.extraText ||
      this.meta;
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('event')}
      >
        {this.image && <FeedLabel image={this.image} />}
        {this.icon && <FeedLabel icon={this.icon} />}
        {hasContent && (
          <FeedContent
            content={this.content}
            date={this.date}
            summary={this.summary}
            extraImages={this.extraImages}
            extraText={this.extraText}
            meta={this.meta}
          />
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
