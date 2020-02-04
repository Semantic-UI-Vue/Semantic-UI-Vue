// Form states
// Form variations
// Field variations
// Group variations
export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Form',
        description: 'A form',
        file: 'Form',
      },
      {
        file: 'Form2',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Field',
        description:
          'A field is a form element containing a label and an input',
        file: 'FormField',
      },
      {
        name: 'Fields',
        description: 'A set of fields can appear grouped together',
        file: 'FormFields',
      },
      {
        file: 'FormFields2',
      },
      {
        file: 'FormFields3',
      },
      {
        name: 'Text Area',
        description: 'A textarea can be used to allow for extended user input.',
        file: 'FormTextArea',
      },
      {
        name: 'Checkbox',
        description: 'A form can contain a checkbox',
        file: 'FormCheckbox',
      },
      {
        name: 'Radio Checkbox',
        description: 'A form can include a radio checkbox',
        file: 'FormRadioCheckbox',
      },
      {
        name: 'Dropdown',
        description: 'A form can contain a dropdown',
        file: 'FormDropdown',
      },
      {
        file: 'FormDropdown2',
      },
      {
        name: 'Multiple Select',
        description:
          'A multiple select is used to include several choices with one form field',
        file: 'FormMultipleSelect',
      },
      {
        name: 'HTML Select',
        description: 'Forms also can provide basic styling for select elements',
        file: 'FormHTMLSelect',
      },
      {
        name: 'Message',
        description: 'A form can contain a message',
        file: 'FormMessage',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Loading',
        description:
          'If a form is in loading state, it will automatically show a loading indicator.',
        file: 'FormLoading',
      },
      {
        name: 'Success',
        description:
          'If a form is in an success state, it will automatically show any success message blocks.',
        file: 'FormSuccess',
      },
      {
        name: 'Error',
        description:
          'If a form is in an error state, it will automatically show any error message blocks.',
        file: 'FormError',
      },
      {
        name: 'Warning',
        description:
          'If a form is in warning state, it will automatically show any warning message block.',
        file: 'FormWarning',
      },
      {
        name: 'Field Error',
        description: 'Individual fields may display an error state',
        file: 'FormFieldError',
      },
      {
        name: 'Disabled Field',
        description: 'Individual fields may be disabled',
        file: 'FormDisabled',
      },
      {
        name: 'Read-Only Field',
        description: 'Individual fields may be read only',
        file: 'FormReadOnly',
      },
    ],
  },
  {
    name: 'Form Variations',
    examples: [
      {
        name: 'Size',
        description: 'A form can vary in size',
        file: 'FormSizeVariationMini',
      },
      {
        file: 'FormSizeVariationTiny',
      },
      {
        file: 'FormSizeVariationSmall',
      },
      {
        file: 'FormSizeVariationLarge',
      },
      {
        file: 'FormSizeVariationBig',
      },
      {
        file: 'FormSizeVariationHuge',
      },
      {
        file: 'FormSizeVariationMassive',
      },
      {
        name: 'Equal Width Form',
        description: 'Forms can automatically divide fields to be equal width',
        file: 'FormEqualWidth',
      },
      {
        name: 'Inverted',
        description:
          'A form on a dark background may have to invert its color scheme',
        file: 'FormInverted',
      },
    ],
  },
  {
    name: 'Field Variations',
    examples: [
      {
        name: 'Inline Field',
        description: 'A field can have its label next to instead of above it.',
        file: 'FieldInline',
      },
      {
        name: 'Width',
        description: 'A field can specify its width in grid columns',
        file: 'FieldWidth',
      },
      {
        name: 'Required',
        description: 'A field can show that input is mandatory',
        file: 'FieldRequired',
      },
    ],
  },
  {
    name: 'Group Variations',
    examples: [
      {
        name: 'Evenly Divided',
        description: 'Fields can have their widths divided evenly',
        file: 'GroupEvenlyDivided',
      },
      {
        name: 'Grouped Fields',
        description: 'Fields can show related choices',
        file: 'GroupedFields',
      },
      {
        name: 'Equal Width Fields',
        description: 'Fields can automatically divide fields to be equal width',
        file: 'GroupEqualWidth',
      },
      {
        name: 'Inline Fields',
        description: 'Multiple fields may be inline in a row',
        file: 'GroupFieldsInline',
      },
      {
        file: 'GroupFieldsInline2',
      },
    ],
  },
];
