import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiIcon',
  props: {
    as: ElType('i'),
    name: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <this.as {...getChildProps(this)} class={`icon ${this.name}`} />
    );
  },
};
