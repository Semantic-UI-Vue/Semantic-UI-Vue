import Button from './Button.example';
import Emphasis from './Emphasis.example';
import Animated from './Animated.example';
import Labeled from './Labeled.example';
import Labeled2 from './Labeled2.example';
import Icon from './Icon.example';
import LabeledIcon from './LabeledIcon.example';
import Basic from './Basic.example';
import Basic2 from './Basic2.example';
import Basic3 from './Basic3.example';
import Inverted from './Inverted.example';
import Inverted2 from './Inverted2.example';
import Buttons from './Buttons.example';
import IconButtons from './IconButtons.example';
import Conditional from './Conditional.example';
import Conditional2 from './Conditional2.example';
import Active from './Active.example';
import Disabled from './Disabled.example';
import Loading from './Loading.example';
import Social from './Social.example';
import Size from './Size.example';
import Floated from './Floated.example';
import Colored from './Colored.example';
import Compact from './Compact.example';
// TODO: Add example for toggle button
import Positive from './Positive.example';
import Negative from './Negative.example';
import Fluid from './Fluid.example';
import Circular from './Circular.example';
import CircularSocial from './CircularSocial.example';
import Attached from './Attached.example';
import AttachedGroup from './AttachedGroup.example';
import AttachedHorizontally from './AttachedHorizontally.example';
import ButtonsVertical from './ButtonsVertical.example';
import ButtonsIcon from './ButtonsIcon.example';
import ButtonsIconLabeled from './ButtonsIconLabeled.example';
import ButtonsMixed from './ButtonsMixed.example';
import ButtonsEqualWidth from './ButtonsEqualWidth.example';
import ButtonsColored from './ButtonsColored.example';
import ButtonsBasic from './ButtonsBasic.example';
import ButtonsBasicColored from './ButtonsBasicColored.example';
import ButtonsSizes from './ButtonsSizes.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Button',
        description: 'A standard button',
        component: Button,
      },
      {
        title: 'Emphasis',
        description: 'A button can be formatted to show different levels of emphasis',
        component: Emphasis,
      },
      {
        title: 'Animated',
        description: 'A button can animate to show hidden content',
        component: Animated,
      },
      {
        title: 'Labeled',
        description: 'A button can appear alongside a label',
        component: Labeled,
      },
      {
        component: Labeled2,
      },
      {
        title: 'Icon',
        description: 'A button can have only an icon',
        component: Icon,
      },
      {
        title: 'LabeledIcon',
        description: 'A button can use an icon as a label',
        component: LabeledIcon,
      },
      {
        title: 'Basic',
        description: 'A basic button is less pronounced',
        component: Basic,
      },
      {
        component: Basic2,
      },
      {
        component: Basic3,
      },
      {
        title: 'Inverted',
        description: 'A button can be formatted to appear on dark backgrounds',
        component: Inverted,
      },
      {
        component: Inverted2,
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Buttons',
        description: 'Buttons can exist together as a group',
        component: Buttons,
      },
      {
        title: 'IconButtons',
        description: 'Button groups can show groups of icons',
        component: IconButtons,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Conditional',
        description: 'Button groups can contain conditionals',
        component: Conditional,
      },
      {
        description: 'Or buttons can have their text localized, or adjusted by using the text prop',
        info: 'Or buttons can have their text localized, or adjusted by using the `text` attribute. ' +
        'If the size of the conditional changes you will need to adjust `@orCircleSize`',
        component: Conditional2,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'A button can show it is currently the active user selection',
        component: Active,
      },
      {
        title: 'Disabled',
        description: 'A button can show it is currently unable to be interacted with',
        component: Disabled,
      },
      {
        title: 'Loading',
        description: 'A button can show a loading indicator',
        component: Loading,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Social',
        description: 'A button can be formatted to link to a social websiten',
        component: Social,
      },
      {
        title: 'Size',
        description: 'A button can have different sizes',
        component: Size,
      },
      {
        title: 'Floated',
        description: 'A button can be aligned to the left or right of its container',
        component: Floated,
      },
      {
        title: 'Colored',
        description: 'A button can have different colors',
        component: Colored,
      },
      {
        title: 'Compact',
        description: 'A button can reduce its padding to fit into tighter spaces',
        component: Compact,
      },
      {
        title: 'Positive',
        description: 'A button can hint towards a positive consequence',
        component: Positive,
      },
      {
        title: 'Negative',
        description: 'A button can hint towards a negative consequence',
        component: Negative,
      },
      {
        title: 'Fluid',
        description: 'A button can take the width of its container',
        component: Fluid,
      },
      {
        title: 'Circular',
        description: 'A button can be circular',
        component: Circular,
      },
      {
        title: 'CircularSocial',
        component: CircularSocial,
      },
      {
        title: 'Vertically Attached',
        description: 'A button can be attached to the top or bottom of other content',
        info: 'You should use `<div is="sui-button">...</div>` to make button attachable',
        component: Attached,
      },
      {
        component: AttachedGroup,
      },
      {
        title: 'Horizontally Attached',
        description: 'A button can be attached to the left or right of other content',
        component: AttachedHorizontally,
      },
    ],
  },
  {
    title: 'Group Variations',
    examples: [
      {
        title: 'Vertical Buttons',
        description: 'Groups can be formatted to appear vertically',
        component: ButtonsVertical,
      },
      {
        title: 'Icon Buttons',
        description: 'Groups can be formatted as icons',
        component: ButtonsIcon,
      },
      {
        title: 'Labeled Icon Buttons',
        description: 'Groups can be formatted as labeled icons',
        component: ButtonsIconLabeled,
      },
      {
        title: 'Mixed Group',
        description: 'Groups can be formatted to use multiple button types together',
        component: ButtonsMixed,
      },
      {
        title: 'Equal Width',
        description: 'Groups can have their widths divided evenly',
        component: ButtonsEqualWidth,
      },
      {
        title: 'Colored Buttons',
        description: 'Groups can have a shared color',
        component: ButtonsColored,
      },
      {
        title: 'Basic Buttons',
        description: 'A button group can be less pronounced',
        component: ButtonsBasic,
      },
      {
        info: 'You have to specify `basic` attribute to each button in basic group if you need to use colorful buttons',
        component: ButtonsBasicColored,
      },
      {
        title: 'Group Sizes',
        description: 'Groups can have a shared size',
        component: ButtonsSizes,
      },
    ],
  },
];
