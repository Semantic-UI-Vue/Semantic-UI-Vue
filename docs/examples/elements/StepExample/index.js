import Step from './Step.example';
import Steps from './Steps.example';
import Ordered from './Ordered.example';
import Vertical from './Vertical.example';
import Description from './Description.example';
import Description2 from './Description2.example';
import Icon from './Icon.example';
import Link from './Link.example';
import Link2 from './Link2.example';
import Active from './Active.example';
import Completed from './Completed.example';
import Completed2 from './Completed2.example';
import Disabled from './Disabled.example';
import Stackable from './Stackable.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Step',
        description: 'A single step',
        component: Step,
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Steps',
        description: 'A set of steps',
        component: Steps,
      },
      {
        title: 'Ordered',
        description: 'A step can show a ordered sequence of steps',
        component: Ordered,
      },
      {
        title: 'Vertical',
        description: 'A step can be displayed stacked vertically',
        component: Vertical,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Description',
        description: 'A step can contain a description',
        info: 'Using props',
        component: Description,
      },
      {
        info: 'Using component',
        component: Description2,
      },
      {
        title: 'Icon',
        description: 'A step can contain an icon',
        component: Icon,
      },
      {
        title: 'Link',
        description: 'A step can link',
        info: 'Using `a` tag',
        component: Link,
      },
      {
        info: 'Using `link` props',
        component: Link2,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'A step can be highlighted as active',
        component: Active,
      },
      {
        title: 'Completed',
        description: 'A step can show that a user has completed it',
        component: Completed,
      },
      {
        info: 'when no `icon props`, there must be `ordered props`',
        component: Completed2,
      },
      {
        title: 'Disabled',
        description: 'A step can show that it cannot be selected',
        component: Disabled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Stackable',
        description: 'A step can stack vertically only on smaller screens',
        component: Stackable,
      },
    ],
  },
];
