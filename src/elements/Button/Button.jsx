import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiButton',
  props: {
    active: {
      type: Boolean,
      description: 'A button can show it is currently the active user selection.',
    },
    animated: Enum(['fade', 'vertical'], {
      description: 'A button can animate to show hidden content.',
      type: Boolean,
    }),
    attached: Enum(['left', 'right', 'top', 'bottom'], {
      description: 'A button can be attached to the top or bottom of other content.',
    }),
    basic: {
      type: Boolean,
      description: 'A basic button is less pronounced.',
    },
    circular: {
      type: Boolean,
      description: 'A button can be circular.',
    },
    className: {
      type: String,
      description: 'Additional classes.',
    },
    color: Enum.Color,
    compact: {
      type: Boolean,
      description: 'A button can reduce its padding to fit into tighter spaces.',
    },
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
    disabled: {
      type: Boolean,
      description: 'A button can show it is currently unable to be interacted with.',
    },
    floated: {
      type: Number,
      description: 'A button can be aligned to the left or right of its container.',
    },
    fluid: {
      type: Boolean,
      description: 'A button can take the width of its container.',
    },
    icon: String,
    inverted: {
      type: Boolean,
      description: 'A button can be formatted to appear on dark backgrounds.',
    },
    // label: {
    //   type: String,
    //   description: 'Add a Label by text, props object, or pass a <Label />.',
    // },
    labelPosition: Enum(['left', 'right'], {
      description: 'A labeled button can format a Label or Icon to appear on the left or right.',
    }),
    loading: {
      type: Boolean,
      description: 'A button can show a loading indicator.',
    },
    negative: {
      type: Boolean,
      description: 'A button can hint towards a negative consequence.',
    },
    positive: {
      type: Boolean,
      description: 'A button can hint towards a positive consequence.',
    },
    primary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
    secondary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
    size: Enum.Size,
    tabIndex: {
      type: [Number, String],
      description: 'A button can receive focus.',
    },
    toggle: {
      type: Boolean,
      description: 'A button can be formatted to toggle on and off.',
    },
  },
  render() {
    const ElementType = getElementType(this, 'button');
    const LabelType = this.$slots.label ? getElementType(this.$slots.label) : null;
    const classList = classes(
      'ui',
      this.inverted && 'inverted',
      this.color,
      this.primary && 'primary',
      this.secondary && 'secondary',
      this.basic && 'basic',
      this.$slots.label && 'labeled',
      'button',
    );

    return (
      <ElementType
        {...getChildProps(this)}
        class={classList}
        role="button"
      >
        {this.$slots.label && <LabelType>{this.$slots.label}</LabelType>}
        {this.$slots.label ? (
          <button class={classList}>{this.content || this.$slots.default}</button>
        ) : (
          this.content || this.$slots.default
        )}
      </ElementType>
    );
  },
};
