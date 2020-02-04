import { Enum } from '../../lib/PropTypes';
import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiProgress',
  mixins: [SemanticUIVueMixin],
  props: {
    label: String,
    content: String,
    top: Boolean,
    bottom: Boolean,
    attached: Boolean,
    inverted: Boolean,
    progress: Boolean,
    indicating: Boolean,
    indeterminate: Boolean,
    size: Enum.Size(),
    color: Enum.Color(),
    state: Enum.State(),
    percent: {
      type: [Number, String],
      default: 50,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },
  computed: {
    percentString() {
      return `${this.percent}%`;
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          'progress',
          this.state,
          this.color,
          this.size,
          this.top && 'top',
          this.bottom && 'bottom',
          this.inverted && 'inverted',
          this.attached && 'attached',
          this.indicating && 'indicating',
          this.indeterminate && 'indeterminate',
        )}
        data-percent={this.percent}
      >
        <div
          class="bar"
          style={{
            width: this.percentString,
            'transition-duration': '300ms',
          }}
        >
          {this.progress && <div class="progress"> {this.percentString} </div>}
        </div>
        {this.label && <div class="label">{this.label}</div>}
      </ElementType>
    );
  },
};
