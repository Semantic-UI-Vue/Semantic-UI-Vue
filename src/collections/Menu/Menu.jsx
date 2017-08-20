import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiMenu',
  props: {
    as: ElType(),
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    return (
      <this.as
        {...getChildProps(this)}
        class={`ui menu${this.vertical ? ' vertical' : ''}${this.inverted ? ' inverted' : ''}`}
      >
        {this.$slots.default}
      </this.as>
    );
  },
};
