import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiMenuItem',
  props: {
    as: ElType(),
  },
  render() {
    return (
      <this.as {...getChildProps(this)} class="item">
        {this.$slots.default}
      </this.as>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
