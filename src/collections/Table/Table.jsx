import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTable',
  mixins: [SemanticUIVueMixin],
  description: 'A table displays a collections of data grouped into rows.',
  props: {
    basic: Enum(['very'], {
      type: Boolean,
      description: 'A table can reduce its complexity to increase readability.',
    }),
    celled: Boolean,
    padded: Enum(['very'], {
      type: Boolean,
    }),
    collapsing: Boolean,
    compact: Enum(['very'], {
      type: Boolean,
      description:
        'A table may sometimes need to be more compact to make more rows visible at a time.',
    }),
    definition: Boolean,
    striped: Boolean,
    textAlign: Enum(['left', 'right', 'center']),
    fixed: Boolean,
    unstackable: Boolean,
    stackable: Boolean,
    selectable: Boolean,
    inverted: Boolean,
    color: Enum.Color(),
    size: Enum(['small', 'large']),
    singleLine: Boolean,
    columns: Enum.Number(),
  },
  render() {
    const ElementType = this.getElementType('table');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.textAlign,
          this.textAlign && 'aligned',
          this.basic,
          this.basic && 'basic',
          this.celled && 'celled',
          this.padded,
          this.padded && 'padded',
          this.collapsing && 'collapsing',
          this.compact,
          this.compact && 'compact',
          this.definition && 'definition',
          this.striped && 'striped',
          this.fixed && 'fixed',
          this.unstackable && 'unstackable',
          this.stackable && 'tablet stackable',
          this.selectable && 'selectable',
          this.inverted && 'inverted',
          this.color,
          this.size,
          this.singleLine && 'single line',
          this.columns && `${this.num(this.columns)} column`,
          'table',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
