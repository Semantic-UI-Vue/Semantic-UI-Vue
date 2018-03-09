import { classes, getChildProps, getElementType, listenersMixin, num, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridColumn',
  mixins: [listenersMixin],
  description: 'A column sub-component for Grid.',
  props: {
    color: Enum.Color({
      description: 'A grid column can be colored.',
    }),
    centered: Boolean,
    width: Enum.Number({
      description: 'Represents width of column.',
    }),
    mobile: Enum.Number({
      description: 'A column can specify a width for a mobile device.',
    }),
    tablet: Enum.Number({
      description: 'A column can specify a width for a tablet device.',
    }),
    computer: Enum.Number({
      description: 'A column can specify a width for a computer.',
    }),
    largeScreen: Enum.Number({
      description: 'A column can specify a width for a large screen device.',
    }),
    widescreen: Enum.Number({
      description: 'A column can specify a width for a widescreen device.',
    }),
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
        {...this.generateListeners()}
        class={classes(
          this.floated && `${this.floated} floated`,
          textAlign(this.textAlign),
          this.verticalAlign && `${this.verticalAlign} aligned`,
          this.width && `${num(this.width)} wide`,
          this.mobile && `${num(this.mobile)} wide mobile`,
          this.tablet && `${num(this.tablet)} wide tablet`,
          this.computer && `${num(this.computer)} wide computer`,
          this.widescreen && `${num(this.widescreen)} wide widescreen`,
          this.largeScreen && `${num(this.largeScreen)} wide large screen`,
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
