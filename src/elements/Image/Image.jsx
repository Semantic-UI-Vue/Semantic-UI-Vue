import { getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiImage',
  props: {
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
    const ElementType = getElementType(this, 'img');

    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui image ${this.size || ''} ${this.getSpacedClass()}`}
        src={this.src}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
