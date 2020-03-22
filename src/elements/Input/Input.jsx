import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiButton from '../../elements/Button/Button';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiInput',
  components: { SuiButton, SuiIcon },
  mixins: [SemanticUIVueMixin],
  props: {
    action: String,
    disabled: Boolean,
    error: Boolean,
    focus: Boolean,
    fluid: Boolean,
    icon: String,
    iconPosition: Enum(['left', 'right']),
    inverted: Boolean,
    inputClass: String,
    loading: Boolean,
    size: Enum(['mini', 'small', 'large', 'big', 'huge', 'massive']),
    transparent: Boolean,
    type: {
      description: 'The HTML input type.',
      default: 'text',
      type: String,
    },
    value: [String, Number],
  },
  events: {
    input: {
      custom: true,
    },
    blur: {
      custom: true,
    },
  },
  methods: {
    handleChange(event) {
      const eventValue = event.target.value;
      const value = this.type === 'number' ? Number(eventValue) : eventValue;
      this.$emit('input', value);
    },
  },
  render() {
    const ElementType = this.getElementType();
    let icon;
    if (this.loading || this.icon) {
      icon = <SuiIcon name={this.loading ? 'loading' : this.icon} />;
    }

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.action && 'action',
          this.disabled && 'disabled',
          this.error && 'error',
          this.focus && 'focus',
          this.transparent && 'transparent',
          this.inverted && 'inverted',
          this.loading && 'loading',
          this.fluid && 'fluid',
          this.iconPosition === 'left' && 'left',
          (this.loading || this.icon) && 'icon',
          Boolean(this.size) && this.size,
          'input',
        )}
      >
        <input
          class={this.inputClass}
          value={this.value}
          onInput={this.handleChange}
          onFocus={e => this.$emit('focus', e)}
          onBlur={e => this.$emit('blur', e)}
          ref="input"
          type={this.type}
          {...{ attrs: this.$attrs }}
        />
        {icon}
        {this.action && <SuiButton content={this.action} />}
      </ElementType>
    );
  },
};
