import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableRow',
  mixins: [SemanticUIVueMixin],
  props: {
    active: {
      description: 'A row can be active or selected by a user.',
      type: Boolean,
    },
    disabled: {
      description: 'A row can be disabled.',
      type: Boolean,
    },
    error: {
      description: 'A row may call attention to an error or a negative value.',
      type: Boolean,
    },
    negative: {
      description: 'A row may let a user know whether a value is bad.',
      type: Boolean,
    },
    positive: {
      description: 'A row may let a user know whether a value is good.',
      type: Boolean,
    },
    selected: {
      description: 'DEPRECATED A row can be active or selected by a user.',
      type: Boolean,
    },
    state: Enum.State({
      description: 'DEPRECATED',
    }),
    textAlign: Enum(['left', 'right', 'center'], {
      description: 'A table row can adjust its text alignment.',
    }),
    verticalAlign: Enum.VerticalAlign({
      description: 'A row may warn a user.',
    }),
    warning: {
      description: 'A row may warn a user.',
      type: Boolean,
    },
  },
  render() {
    const ElementType = this.getElementType('tr');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.textAlign && `${this.textAlign} aligned`,
          this.verticalAlign && `${this.verticalAlign} aligned`,
          this.disabled && 'disabled',
          this.error && 'error',
          this.negative && 'negative',
          this.positive && 'positive',
          (this.selected || this.active) && 'active',
          this.warning && 'warning',
          this.state,
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
