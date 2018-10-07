import Fade from './Fade.example';
import MoveUp from './MoveUp.example';
import MoveDown from './MoveDown.example';
import MoveLeft from './MoveLeft.example';
import MoveRight from './MoveRight.example';
import RotateRight from './RotateRight.example';
import RotateLeft from './RotateLeft.example';
import VisibleContent from './VisibleContent.example';
import HiddenContent from './HiddenContent.example';
import Active from './Active.example';
import Instant from './Instant.example';
import Disabled from './Disabled.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Fade',
        description: 'An element can disappear to reveal content below',
        component: Fade,
      },
      {
        title: 'Move',
        description: 'An element can move in a direction to reveal content.',
        component: MoveLeft,
      },
      {
        component: MoveRight,
      },
      {
        component: MoveUp,
      },
      {
        component: MoveDown,
      },
      {
        title: 'Rotate',
        description: 'An element can rotate to reveal content below.',
        component: RotateRight,
      },
      {
        component: RotateLeft,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Visible content',
        description: 'A reveal may contain content that is visible before interaction.',
        component: VisibleContent,
      }, {
        title: 'Hidden content',
        description: 'A reveal may contain content that is hidden before user interaction.',
        component: HiddenContent,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Instant',
        description: 'An element can show its content without delay.',
        component: Instant,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'An active reveal displays its hidden content.',
        component: Active,
      },
      {
        title: 'Disabled',
        description: 'A disabled reveal will not animate when hovered.',
        component: Disabled,
      },
    ],
  },
];
