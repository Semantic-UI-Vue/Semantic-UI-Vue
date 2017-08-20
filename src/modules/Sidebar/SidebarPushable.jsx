import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiSidebarPushable',
  props: {
    as: ElType(),
  },
  render() {
    return <this.as {...getChildProps(this)} class="pushable">{this.$slots.default}</this.as>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
