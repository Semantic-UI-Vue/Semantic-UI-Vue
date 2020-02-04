import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiFormFields',
  mixins: [SemanticUIVueMixin],
  props: {
    inline: {
      type: Boolean,
      description: 'Multiple fields may be inline in a row.',
    },
    equalWidth: {
      type: Boolean,
      description:
        'Field group can automatically divide fields to be equal width.',
    },
    grouped: {
      type: Boolean,
      description: 'Fields can show related choices.',
    },
    fields: Enum.Number({
      choices: ['equal'],
      description: 'Represents number of fields in group',
    }),
    unstackable: {
      type: Boolean,
      description: 'A form group can prevent itself from stacking on mobile.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.unstackable && 'unstackable',
          this.inline && 'inline',
          this.equalWidth && 'equal width',
          this.grouped && 'grouped',
          this.num(this.fields),
          'fields',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiForm',
  },
};
