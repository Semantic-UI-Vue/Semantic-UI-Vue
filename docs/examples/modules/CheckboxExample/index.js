import CheckboxBasic from './CheckboxBasic.example';
import CheckboxModel from './CheckboxModel.example';
import CheckboxToggle from './CheckboxToggle.example';
import Radio from './Radio.example';
import RadioGroup from './RadioGroup.example';
import RadioGroupInline from './RadioGroupInline.example';

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
        title: 'Radio',
        description: 'A checkbox can be formatted as a radio element. This means it is an exclusive option',
        component: Radio,
      },
      {
        component: RadioGroupInline,
      },
      {
        component: RadioGroup,
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
