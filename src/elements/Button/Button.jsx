import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import Icon from '../Icon/Icon';

export default {
  name: 'SuiButton',
  props: {
    active: {
      type: Boolean,
      description: 'A button can show it is currently the active user selection.',
    },
    animated: Enum(['fade', 'vertical'], {
      type: Boolean,
      description: 'A button can animate to show hidden content.',
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
    color: Enum.Color(),
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
    floated: Enum(['left', 'right'], {
      description: 'A button can be aligned to the left or right of its container.',
    }),
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
    size: Enum.Size(),
    tabIndex: {
      type: [Number, String],
      description: 'A button can receive focus.',
    },
    toggle: { // TODO: Add props and functional for toggle buttons
      type: Boolean,
      description: 'A button can be formatted to toggle on and off.',
    },
    social: Enum.Social(),
  },
  render() {
    const ElementType = getElementType(this, 'button');

    const label = this.$slots.label;

    const classList = classes(
      'ui',
      this.active && 'active',
      this.attached && `${this.attached} attached`,
      this.animated, this.animated && 'animated',
      this.basic && 'basic',
      this.circular && 'circular',
      this.className,
      this.color,
      this.compact && 'compact',
      this.disabled && 'disabled',
      this.floated && `${this.floated} floated`,
      this.fluid && 'fluid',
      this.icon && !(this.content || this.$slots.default) && 'icon',
      !label && this.icon && this.labelPosition && 'icon',
      this.inverted && 'inverted',
      !label && this.labelPosition && this.labelPosition,
      !label && this.labelPosition && 'labeled',
      this.loading && 'loading',
      this.negative && 'negative',
      this.positive && 'positive',
      this.primary && 'primary',
      this.secondary && 'secondary',
      this.social,
      this.size,
      'button',
    );

    const button = (
      <ElementType
        {...getChildProps(this)}
        class={classList}
        role="button"
      >
        {this.icon && <Icon name={this.icon}/>}
        {this.content || this.$slots.default}
      </ElementType>
    );

    if (label) {
      return (
        <div class={classes('ui', this.labelPosition, 'labeled', 'button')}>
          {this.labelPosition === 'left' && label}
          {button}
          {this.labelPosition !== 'left' && label}
        </div>
      );
    }

    return button;
  },
};
