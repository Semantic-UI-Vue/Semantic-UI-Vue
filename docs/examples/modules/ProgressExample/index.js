import Standard from './Standard.example';
import Indicating from './Indicating.example';
import Progress from './Progress.example';
import Bar from './Bar.example';
import Label from './Label.example';
import Active from './Active.example';
import Disabled from './Disabled.example';
import Warning from './Warning.example';
import ErrorState from './Error.example';
import Success from './Success.example';
import Size from './Size.example';
import Color from './Color.example';
import Attached from './Attached.example';
import Inverted from './Inverted.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Standard',
        description: 'A standard progress bar',
        component: Standard,
      },
      {
        title: 'Indicating',
        description: 'An indicating progress bar visually indicates the current level of progress of a task',
        component: Indicating,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Bar',
        description: 'A progress element can contain a bar visually indicating progress',
        component: Bar,
      },
      {
        title: 'Progress',
        description: 'A progress bar can contain a text value indicating current progress',
        component: Progress,
      },
      {
        title: 'Label',
        description: 'A progress element can contain a label',
        component: Label,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'A progress bar can show activity',
        component: Active,
      },
      {
        title: 'Success',
        description: 'A progress bar can show a success state',
        component: Success,
      },
      {
        title: 'Warning',
        description: 'A progress bar can show a warning state',
        component: Warning,
      },
      {
        title: 'Error',
        description: 'A progress bar can show an error state',
        component: ErrorState,
      },
      {
        title: 'Disabled',
        description: 'A progress bar can be disabled',
        component: Disabled,
      },
    ],
  },
  {
    title: 'Size',
    examples: [
      {
        description: 'A progress bar can vary in size',
        component: Size,
      },
    ],
  },
  {
    title: 'Color',
    examples: [
      {
        description: 'Can have different colors:',
        component: Color,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'A progress bar can have its colors inverted',
        component: Inverted,
      },
      {
        title: 'Attached',
        description: 'A progress bar can show progress of an element',
        component: Attached,
      },
    ],
  },
];
