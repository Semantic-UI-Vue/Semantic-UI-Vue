import Container from './Container.example';
import TextContainer from './TextContainer.example';
import TextAlignment from './TextAlignment.example';
import Fluid from './Fluid.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Container',
        description: 'A standard container',
        component: Container,
      },
      {
        title: 'Text Container',
        description: 'A button can be formatted to show different levels of emphasis',
        component: TextContainer,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Text Alignment',
        description: 'A container can specify its text alignment',
        component: TextAlignment,
      },
      {
        title: 'Fluid',
        description: 'A fluid container has no maximum width',
        component: Fluid,
      },
    ],
  },
];
