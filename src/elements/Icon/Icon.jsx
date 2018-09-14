import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiIcon',
  mixins: [SemanticUIVueMixin],
  props: {
    circular: Boolean,
    color: Enum.Color(),
    disabled: Boolean,
    fitted: Boolean,
    name: {
      type: String,
      required: true,
    },
    loading: Boolean,
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType('i');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.color,
          this.name,
          this.size,
          this.disabled && 'disabled',
          this.circular && 'circular',
          this.fitted && 'fitted',
          this.loading && 'loading',
          'icon',
        )}
      />
    );
  },
};
