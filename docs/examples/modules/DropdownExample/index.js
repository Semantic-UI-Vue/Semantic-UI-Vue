import Dropdown from './Dropdown.example';
import DropdownButton from './DropdownButton.example';
import DropdownFloating from './DropdownFloating.example';
import FriendSelection from './FriendSelection.example';
import Selection from './Selection.example';

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
        title: 'Selection',
        description: 'A dropdown can be used to select between choices in a form.',
        component: Selection,
      },
      {
        component: FriendSelection,
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
