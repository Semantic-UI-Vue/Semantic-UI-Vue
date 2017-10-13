import { classes, getElementType, getChildProps } from '../../lib';

export default {
  name: 'SuiShapeSide',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Set the first side to be showed.',
    },
    animating: {
      type:  Boolean,
      default: false,
      description: 'The side is currently animating.',
    },
    hidden: {
      type: Boolean,
      default: false,
      description: 'THe side is currently hidden.',
    },
    header: {
      type: Boolean,
      default: false,
      description: 'The side is an header.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    let style = {};

    if (classes(this.animating)) {
      style = {
        left: '0',
        transform: 'rotateY(-90deg) translateZ(145px)',
        transitionDuration: `${duration}ms`,
      };
    }

    if (classes(this.active) && classes(this.hidden)) {
      style = {
        transform: 'rotateY(0deg) translateZ(145px)',
        transitionDuration: `${duration}ms`,
      };
    }

    return(
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.active && 'active',
          this.animating && 'animating',
          this.header && 'header',
          this.hidden && 'hidden',
          'side',
        )}

        style={style}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiShapeSides',
  },
};
