export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Dropdown',
        description: 'A dropdown.',
        file: 'Dropdown',
      },
      {
        title: 'Disabled dropdown',
        description: 'A dropdown that is disabled.',
        file: 'DisabledDropdown',
      },
      {
        title: 'Selection',
        description: 'A dropdown can be used to select between choices in a form.',
        file: 'Selection',
      },
      {
        file: 'FriendSelection',
      },
      {
        title: 'Search Selection',
        description: 'A selection dropdown can allow a user to search through a large list of choices.',
        file: 'SearchSelection',
      },
      {
        file: 'SearchSelectionWithoutFlag',
      },
      {
        title: 'Multiple Selection',
        description: 'A selection dropdown can allow multiple selections.',
        file: 'MultipleSelection',
      },
      {
        title: 'Multiple Search Selection',
        description: 'A selection dropdown can allow multiple search selections.',
        file: 'MultipleSearchSelection',
      },
      {
        title: 'Multiple Search Selection With Additions',
        description: 'A selection dropdown can allow multiple search selections and user additions.',
        file: 'MultipleSearchSelectionWithAddition',
      },
      {
        title: 'Search Dropdown',
        description: 'A dropdown can be searchable.',
        file: 'SearchDropdown',
      },
      {
        title: 'Search In-Menu',
        description: 'A dropdown can include a search prompt inside its menu',
        file: 'DropdownSearchInMenu',
      },
      {
        title: 'Loading',
        description: 'A dropdown can show that it is currently loading data',
        file: 'Loading',
      },
      {
        title: 'Button',
        description: 'A dropdown button style and icon.',
        file: 'DropdownButton',
      },
      {
        title: 'Pointing',
        description: 'A dropdown can be formatted so that its menu is pointing.',
        file: 'DropdownPointing',
      },
      {
        file: 'DropdownPointingWithPosition',
      },
      {
        title: 'Floating',
        description: 'A dropdown menu can appear to be floating below an element.',
        file: 'DropdownFloating',
      },
      {
        title: 'Simple',
        description: 'A dropdown that works without JavaScript',
        file: 'SimpleDropdown',
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
        file: 'DropdownDirection',
      },
      {
        title: 'Maximum Selections',
        description: 'Using `maxSelections` prop lets you force a maximum number of selections.',
        file: 'MultipleMaxSelections',
      },
    ],
  },
];
