import Dropdown from './Dropdown.example';
import DropdownDirection from './DropdownDirection.example';
import DropdownButton from './DropdownButton.example';
import DropdownFloating from './DropdownFloating.example';
import FriendSelection from './FriendSelection.example';
import MultipleSelection from './MultipleSelection.example';
import MultipleMaxSelections from './MultipleMaxSelections.example';
import MultipleSearchSelection from './MultipleSearchSelection.example';
import Selection from './Selection.example';
import SearchDropdown from './SearchDropdown.example';
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
      {
        title: 'Maximum Selections',
        description: 'Using `maxSelections` prop lets you force a maximum number of selections.',
        component: MultipleMaxSelections,
      },
      {
        title: 'Multiple Search Selection',
        description: 'A selection dropdown can allow multiple search selections.',
        component: MultipleSearchSelection,
      },
      {
        title: 'Search Dropdown',
        description: 'A dropdown can be searchable.',
        component: SearchDropdown,
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
  {
    title: 'Usage',
    examples: [
      {
        title: 'Dropdown opening direction',
        info: 'By default, the dropdown menu opens downward, if the menu does not fit in the screen - it will open upward, but you can force set direction by specifying `direction` prop',
        description: 'You can set the direction of opening dropdown menu',
        component: DropdownDirection,
      },
    ],
  },
];
