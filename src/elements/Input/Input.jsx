import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';
import Icon from 'src/elements/Icon/Icon';

export default {
  name: 'SuiInput',
  props: {
    as: ElType(),
    icon: String,
    inverted: Boolean,
    transparent: Boolean,
  },
  render() {
    return (
      <this.as {...getChildProps(this)} class={`ui input${this.transparent ? ' transparent' : ''}${this.inverted ? ' inverted' : ''}${this.icon ? ' icon' : ''}`}>
        <input {...{ attrs: this.$attrs }} />
        {this.icon && <Icon name={this.icon} />}
      </this.as>
    );
  },
};
