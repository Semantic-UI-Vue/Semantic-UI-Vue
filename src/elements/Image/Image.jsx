import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiImage',
  props: {
    disabled: Boolean,
    hidden: Boolean,
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

    const img = (
      <img
        class={classes(
          'ui',
          this.size,
          this.spaced !== true && this.spaced,
          this.spaced && 'spaced',
          this.hidden && 'hidden',
          this.disabled && 'disabled',
          'image',
        )}
        src={this.src}
      />
    );

    return ElementType === 'img' ? img : <ElementType {...getChildProps(this)}>{img}</ElementType>;
  },
};
