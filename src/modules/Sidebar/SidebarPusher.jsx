import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiSidebarPusher',
  props: {
    as: ElType(),
  },
  render() {
    return <this.as {...getChildProps(this)} class="pusher">{this.$slots.default}</this.as>;
  },
};
