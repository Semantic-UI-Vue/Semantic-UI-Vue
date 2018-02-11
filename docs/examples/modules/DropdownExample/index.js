import Dropdown from './Dropdown.example';
import DropdownButton from './DropdownButton.example';
import DropdownFloating from './DropdownFloating.example';
import FriendSelection from './FriendSelection.example';
import MultipleSelection from './MultipleSelection.example';
import Selection from './Selection.example';
import SearchSelection from './SearchSelection.example';
import SearchSelectionWithoutFlag from './SearchSelectionWithoutFlag.example';

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
      {
        title: 'Search Selection',
        description: 'A selection dropdown can allow a user to search through a large list of choices.',
        component: SearchSelection,
      },
      {
        component: SearchSelectionWithoutFlag,
      },
      {
        title: 'Multiple Selection',
        description: 'A selection dropdown can allow multiple selections.',
        component: MultipleSelection,
      },
    ],
  },
];
