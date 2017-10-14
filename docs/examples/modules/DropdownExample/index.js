import Dropdown from './Dropdown.example';
import DropdownButton from './DropdownButton.example';
import DropdownFloating from './DropdownFloating.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Dropdown',
        description: 'A dropdown.',
        component: Dropdown,
      },
      {
        title: 'Button',
        description: 'A dropdown button style and icon.',
        component: DropdownButton,
      },
      {
        title: 'Floating',
        description: 'A dropdown menu can appear to be floating below an element.',
        component: DropdownFloating,
      },
    ],
  },
];
