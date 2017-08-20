import { getChildProps } from 'src/lib';
import { ElType, Enum } from 'src/lib/PropTypes';

export default {
  name: 'SuiImage',
  props: {
    as: ElType('img'),
    size: Enum(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    spaced: Enum(['left', 'right'], { type: Boolean }),
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    getSpacedClass() {
      if (this.spaced === true) return 'spaced';
      if (this.spaced) return `${this.spaced} spaced`;
      return '';
    },
  },
  render() {
    return (
      <this.as
        {...getChildProps(this)}
        class={`ui image ${this.size || ''} ${this.getSpacedClass()}`}
        src={this.src}
      >
        {this.$slots.default}
      </this.as>
    );
  },
};
