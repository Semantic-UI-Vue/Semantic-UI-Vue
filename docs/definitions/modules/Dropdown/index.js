export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Dropdown',
        description: 'A dropdown.',
        file: 'Dropdown',
      },
      {
        name: 'Disabled dropdown',
        description: 'A dropdown that is disabled.',
        file: 'DisabledDropdown',
      },
      {
        name: 'Selection',
        description:
          'A dropdown can be used to select between choices in a form.',
        file: 'Selection',
      },
      {
        file: 'FriendSelection',
      },
      {
        name: 'Search Selection',
        description:
          'A selection dropdown can allow a user to search through a large list of choices.',
        file: 'SearchSelection',
      },
      {
        file: 'SearchSelectionWithoutFlag',
      },
      {
        name: 'Multiple Selection',
        description: 'A selection dropdown can allow multiple selections.',
        file: 'MultipleSelection',
      },
      {
        name: 'Multiple Search Selection',
        description:
          'A selection dropdown can allow multiple search selections.',
        file: 'MultipleSearchSelection',
      },
      {
        name: 'Multiple Search Selection With Additions',
        description:
          'A selection dropdown can allow multiple search selections and user additions.',
        file: 'MultipleSearchSelectionWithAddition',
      },
      {
        name: 'Search Dropdown',
        description: 'A dropdown can be searchable.',
        file: 'SearchDropdown',
      },
      {
        name: 'Search In-Menu',
        description: 'A dropdown can include a search prompt inside its menu',
        file: 'DropdownSearchInMenu',
      },
      {
        name: 'Loading',
        description: 'A dropdown can show that it is currently loading data',
        file: 'Loading',
      },
      {
        name: 'Button',
        description: 'A dropdown button style and icon.',
        file: 'DropdownButton',
      },
      {
        name: 'Pointing',
        description:
          'A dropdown can be formatted so that its menu is pointing.',
        file: 'DropdownPointing',
      },
      {
        file: 'DropdownPointingWithPosition',
      },
      {
        name: 'Floating',
        description:
          'A dropdown menu can appear to be floating below an element.',
        file: 'DropdownFloating',
      },
      {
        name: 'Simple',
        description: 'A dropdown that works without JavaScript',
        file: 'SimpleDropdown',
      },
    ],
  },
  {
    name: 'Usage',
    examples: [
      {
        name: 'Dropdown opening direction',
        info:
          'By default, the dropdown menu opens downward, if the menu does not fit in the screen - it will open upward, but you can force set direction by specifying `direction` prop',
        description: 'You can set the direction of opening dropdown menu',
        file: 'DropdownDirection',
      },
      {
        name: 'Maximum Selections',
        description:
          'Using `maxSelections` prop lets you force a maximum number of selections.',
        file: 'MultipleMaxSelections',
      },
    ],
  },
];
