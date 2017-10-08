import CheckboxBasic from './CheckboxBasic.example';
import CheckboxModel from './CheckboxModel.example';
import CheckboxToggle from './CheckboxToggle.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Checkbox Basic',
        description: 'A standard Checkbox',
        component: CheckboxBasic,
      },
      {
        title: 'Checkbox with two way binding',
        description: 'Checkbox with two way binding',
        component: CheckboxModel,
      },
      {
        title: 'Toggle style input',
        description: 'Toggle style input',
        component: CheckboxToggle,
      },
    ],
  },
];
