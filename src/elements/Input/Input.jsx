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
    icon: String,
    iconPosition: Enum(['left', 'right']),
    inverted: Boolean,
    loading: Boolean,
    transparent: Boolean,
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
          this.iconPosition === 'left' && 'left',
          (this.loading || this.icon) && 'icon',
          'input',
        )}
      >
        <input
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
          onBlur={e => this.$emit('blur', e)}
          {...{ attrs: this.$attrs }}
        />
        {icon}
        {this.action && <SuiButton content={this.action} />}
      </ElementType>
    );
  },
};
