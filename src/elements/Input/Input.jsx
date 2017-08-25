import { getChildProps, getElementType } from '../../lib';
import Icon from '../../elements/Icon/Icon';

export default {
  name: 'SuiInput',
  props: {
    icon: String,
    inverted: Boolean,
    transparent: Boolean,
    value: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={`ui input${this.transparent ? ' transparent' : ''}${this.inverted ? ' inverted' : ''}${this.icon ? ' icon' : ''}`}>
        <input
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
          {...{ attrs: this.$attrs }}
        />
        {this.icon && <Icon name={this.icon} />}
      </ElementType>
    );
  },
};
