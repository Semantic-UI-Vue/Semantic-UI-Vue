import Step from './Step.example';
import Steps from './Steps.example';
import Ordered from './Ordered.example';
import Vertical from './Vertical.example';
import Description from './Description.example';
import Description2 from './Description2.example';

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
    ],
  },
];
