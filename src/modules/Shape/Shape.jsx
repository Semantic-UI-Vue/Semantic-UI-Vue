import { classes, getElementType, getChildProps } from '../../lib';

export default {
  name: 'SuiShape',
  props: {
    cube: {
      type: Boolean,
      default: false,
      description: 'Transform the shape in a cube.',
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
          this.cube && '',
          this.text && '',
          'shape',
          this.irregular && '',
          this.auto && '',
          this.square && '',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
