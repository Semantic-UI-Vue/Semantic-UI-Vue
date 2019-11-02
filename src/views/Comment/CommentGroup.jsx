import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiCommentGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    threaded: {
      type: Boolean,
      description: 'A comment list can be threaded to showing the relationship between conversations.',
      default: false,
    },
    minimal: {
      type: Boolean,
      description: 'Comments can hide extra information unless a user shows intent to interact with a comment.',
      default: false,
    },
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();
    const classList = this.classes(
      'ui',
      'comments',
      this.threaded && 'threaded',
      this.minimal && 'minimal',
      this.size,
    );
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={classList}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
