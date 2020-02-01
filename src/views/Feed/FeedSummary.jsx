import { SemanticUIVueMixin } from '../../lib';
import { FeedDate, FeedUser } from './';

export default {
  name: 'SuiFeedSummary',
  mixins: [SemanticUIVueMixin],
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
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('summary')}
      >
        {this.$slots.default || [
          this.user && <FeedUser content={this.user} />,
          this.content,
          this.date && <FeedDate content={this.date} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
