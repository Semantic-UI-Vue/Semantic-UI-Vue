import { classes, getElementType, getChildProps } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import ShapeSide from './ShapeSide';

export default {
  name: 'SuiShape',
  props: {
    cube: {
      type: Boolean,
      default: false,
      description: 'Transform the shape in a cube.',
    },
    activeIndex: {
      type: Number,
      default: 0,
      description: 'The index of the active side.',
    },
    animation: {
      type: Enum(['flip left', 'flip up', 'flip down', 'flip right', 'flip over', 'flip back']),
      description: 'The animation for the shape.',
    },
    duration: {
      type: Number,
      default: 25000,
      description: 'The animation duration.',
    },
    width: {
      type: String,
      default: 'initial',
    },
    height: {
      type: String,
      default: 'initial',
    },
    items: {
      type: Array,
      description: 'Shorthand for shape sides.',
    },
    styles: {
      type: Object,
      description: 'The style rules for the shape sides.',
    },
    text: {
      type: Boolean,
      default: false,
      description: 'Adapt the shape to allow for sides of text to be displayed.',
    },
    irregular: {
      type: Boolean,
      default: false,
      description: 'Adapt the shape to its content.',
    },
    square: {
      type: Boolean,
      default: false,
      description: 'Force shape to remain a regular square.',
    },
    auto: {
      type: Boolean,
      default: false,
      description: 'Choose between irregular and square depending from the content.',
    },
  },
  render() {
    const ElementType = getElementType(this);

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.cube && 'cube',
          this.text && 'text',
          'shape',
          this.irregular && 'irregular',
          this.auto && 'auto',
          this.square && 'square',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
