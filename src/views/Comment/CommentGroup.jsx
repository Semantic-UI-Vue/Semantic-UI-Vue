import { classMixin, SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiCommentGroup',
  mixins: [SemanticUIVueMixin, classMixin],
  props: {
    threaded: {
      type: Boolean,
      description:
        'A comment list can be threaded to showing the relationship between conversations',
      default: false,
    },
    minimal: {
      type: Boolean,
      description:
        'Comments can hide extra information unless a user shows intent to interact with a comment',
      default: false,
    },
    collapsed: {
      type: Boolean,
      description: 'Comments can be collapsed, or hidden from view',
      default: false,
    },
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();
    const classList = [
      'comments',
      this.threaded && 'threaded',
      this.minimal && 'minimal',
      this.collapsed && 'collapsed',
      this.size,
    ];
    const parentName = this.getParentName();
    if (parentName !== 'SuiComment') classList.push('ui');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(...classList)}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
