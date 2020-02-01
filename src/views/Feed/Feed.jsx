import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import FeedEvent from './FeedEvent';

export default {
  name: 'SuiFeed',
  mixins: [SemanticUIVueMixin],
  description: 'A feed presents user activity chronologically',
  props: {
    size: Enum(['small', 'large'], {
      description: 'A feed can have different sizes (small | large)',
    }),
    events: {
      type: Array,
      description: 'Shorthand array of props for FeedEvent',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.size, 'feed')}
      >
        {this.$slots.default ||
          (this.events &&
            this.events.map(event => <FeedEvent {...{ props: event }} />))}
      </ElementType>
    );
  },
};
