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
import Fluid from './Fluid.example';
import UnStackable from './Unstackable.example';
import Attached from './Attached.example';
import EvenlyDivided from './EvenlyDivided.example';
import EvenlyDivided2 from './EvenlyDivided2.example';
import SizeMini from './SizeMini.example';
import SizeTiny from './SizeTiny.example';
import SizeSmall from './SizeSmall.example';
import SizeLarge from './SizeLarge.example';
import SizeBig from './SizeBig.example';
import SizeHuge from './SizeHuge.example';
import SizeMassive from './SizeMassive.example';

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
      {
        title: 'Fluid',
        description: 'A fluid step takes up the width of its container',
        component: Fluid,
      },
      {
        title: 'UnStackable',
        description: 'A step can prevent itself from stacking on mobile',
        component: UnStackable,
      },
      {
        title: 'Attached',
        description: 'Steps can be attached to other elements',
        component: Attached,
      },
      {
        title: 'EvenlyDivided',
        description: 'Steps can be divided evenly inside their parent',
        component: EvenlyDivided,
      },
      {
        component: EvenlyDivided2,
      },
      {
        title: 'Size',
        description: 'Steps can have different sizes',
        component: SizeMini,
      },
      {
        component: SizeTiny,
      },
      {
        component: SizeSmall,
      },
      {
        component: SizeLarge,
      },
      {
        component: SizeBig,
      },
      {
        component: SizeHuge,
      },
      {
        component: SizeMassive,
      },
    ],
  },
];
