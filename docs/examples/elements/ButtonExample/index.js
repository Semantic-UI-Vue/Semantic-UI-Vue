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
        description: '',
        component: Conditional,
      },
      {
        description: 'Or buttons can have their text localized, or adjusted by using the text prop',
        component: Conditional2,
      },
    ],
  },
];
