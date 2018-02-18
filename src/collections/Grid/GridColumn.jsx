import { classes, getChildProps, getElementType, num, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridColumn',
  description: 'A column sub-component for Grid.',
  props: {
    color: Enum.Color({
      description: 'A grid column can be colored.',
    }),
    centered: Boolean,
    width: {
      type: Number,
      description: 'Represents width of column.',
    },
    mobile: {
      type: Number,
      description: 'A column can specify a width for a mobile device.',
    },
    tablet: {
      type: Number,
      description: 'A column can specify a width for a tablet device.',
    },
    computer: {
      type: Number,
      description: 'A column can specify a width for a computer.',
    },
    largeScreen: {
      type: Number,
      description: 'A column can specify a width for a large screen device.',
    },
    widescreen: {
      type: Number,
      description: 'A column can specify a width for a widescreen device.',
    },
    floated: Enum(['left', 'right'], {
      description: 'A column can sit flush against the left or right edge of a row.',
    }),
    textAlign: Enum.TextAlign({
      description: 'A column can specify its text alignment.',
    }),
    verticalAlign: Enum.VerticalAlign({
      description: 'A column can specify its vertical alignment to have all its columns vertically centered.',
    }),
    only: Enum(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description: 'A column can appear only for a specific device, or screen sizes.',
    }),
    stretched: {
      type: Boolean,
      description: 'A column can stretch its contents to take up the entire grid or row height.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.floated && `${this.floated} floated`,
          textAlign(this.textAlign),
          this.verticalAlign && `${this.verticalAlign} aligned`,
          num(this.width),
          this.width && 'wide',
          num(this.mobile),
          this.mobile && 'wide mobile',
          num(this.tablet),
          this.tablet && 'wide tablet',
          num(this.computer),
          this.computer && 'wide computer',
          num(this.widescreen),
          this.widescreen && 'wide widescreen',
          num(this.largeScreen),
          this.largeScreen && 'wide large screen',
          this.only && `${this.only} only`,
          this.centered && 'centered',
          this.stretched && 'stretched',
          this.color,
          'column',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiGrid',
  },
};
