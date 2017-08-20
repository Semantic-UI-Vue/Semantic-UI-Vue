import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiHeader',
  props: {
    as: ElType(),
  },
  render() {
    return (
      <this.as {...getChildProps(this)} class="header">
        {this.$slots.default}
      </this.as>
    );
  },
};
