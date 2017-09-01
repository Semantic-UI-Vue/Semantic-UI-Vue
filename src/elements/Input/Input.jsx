import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import SuiButton from '../../elements/Button/Button';
import SuiIcon from '../../elements/Icon/Icon';

export default {
  name: 'SuiInput',
  components: { SuiButton, SuiIcon },
  props: {
    action: String,
    error: Boolean,
    focus: Boolean,
    icon: String,
    iconPosition: Enum(['left', 'right']),
    inverted: Boolean,
    loading: Boolean,
    transparent: Boolean,
    value: String,
  },
  render() {
    const ElementType = getElementType(this);
    let icon;
    if (this.loading || this.icon) {
      icon = <SuiIcon name={this.loading ? 'loading' : this.icon} />;
    }

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.action && 'action',
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
          {...{ attrs: this.$attrs }}
        />
        {icon}
        {this.action && <SuiButton content={this.action} />}
      </ElementType>
    );
  },
};
