import Form from './Form.example';
import Form2 from './Form2.example';
import FormField from './FormField.example';
import FormFields from './FormFields.example';
import FormFields2 from './FormFields2.example';
import FormFields3 from './FormFields3.example';
import FormTextArea from './FormTextArea.example';
import FormCheckbox from './FormCheckbox.example';
import FormRadioCheckbox from './FormRadioCheckbox.example';
import FormDropdown from './FormDropdown.example';
import FormDropdown2 from './FormDropdown2.example';
import FormMultipleSelect from './FormMultipleSelect.example';
import FormHTMLSelect from './FormHTMLSelect.example';
import FormMessage from './FormMessage.example';
// Form states
import FormLoading from './FormStates/FormLoading.example';
import FormSuccess from './FormStates/FormSuccess.example';
import FormError from './FormStates/FormError.example';
import FormWarning from './FormStates/FormWarning.example';
import FormFieldError from './FormStates/FormFieldError.example';
import FormDisabled from './FormStates/FormDisabled.example';
import FormReadOnly from './FormStates/FormReadOnly.example';
// Form variations
import FormSizeVariationMini from './FormVariations/FormSizeVariationMini.example';
import FormSizeVariationTiny from './FormVariations/FormSizeVariationTiny.example';
import FormSizeVariationSmall from './FormVariations/FormSizeVariationSmall.example';
import FormSizeVariationLarge from './FormVariations/FormSizeVariationLarge.example';
import FormSizeVariationBig from './FormVariations/FormSizeVariationBig.example';
import FormSizeVariationHuge from './FormVariations/FormSizeVariationHuge.example';
import FormSizeVariationMassive from './FormVariations/FormSizeVariationMassive.example';
import FormEqualWidth from './FormVariations/FormEqualWidth.example';
import FormInverted from './FormVariations/FormInverted.example';
// Field variations
import FieldInline from './FieldVariations/FieldInline.example';
import FieldWidth from './FieldVariations/FieldWidth.example';
import FieldRequired from './FieldVariations/FieldRequired.example';
// Group variations
import GroupEvenlyDivided from './GroupVariations/GroupEvenlyDivided.example';
import GroupedFields from './GroupVariations/GroupedFields.example';
import GroupEqualWidth from './GroupVariations/GroupEqualWidth.example';
import GroupFieldsInline from './GroupVariations/GroupFieldsInline.example';
import GroupFieldsInline2 from './GroupVariations/GroupFieldsInline2.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Form',
        description: 'A form',
        component: Form,
      },
      {
        component: Form2,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Field',
        description: 'A field is a form element containing a label and an input',
        component: FormField,
      },
      {
        title: 'Fields',
        description: 'A set of fields can appear grouped together',
        component: FormFields,
      },
      {
        component: FormFields2,
      },
      {
        component: FormFields3,
      },
      {
        title: 'Text Area',
        description: 'A textarea can be used to allow for extended user input.',
        component: FormTextArea,
      },
      {
        title: 'Checkbox',
        description: 'A form can contain a checkbox',
        component: FormCheckbox,
      },
      {
        title: 'Radio Checkbox',
        description: 'A form can include a radio checkbox',
        component: FormRadioCheckbox,
      },
      {
        title: 'Dropdown',
        description: 'A form can contain a dropdown',
        component: FormDropdown,
      },
      {
        component: FormDropdown2,
      },
      {
        title: 'Multiple Select',
        description: 'A multiple select is used to include several choices with one form field',
        component: FormMultipleSelect,
      },
      {
        title: 'HTML Select',
        description: 'Forms also can provide basic styling for select elements',
        component: FormHTMLSelect,
      },
      {
        title: 'Message',
        description: 'A form can contain a message',
        component: FormMessage,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Loading',
        description: 'If a form is in loading state, it will automatically show a loading indicator.',
        component: FormLoading,
      },
      {
        title: 'Success',
        description: 'If a form is in an success state, it will automatically show any success message blocks.',
        component: FormSuccess,
      },
      {
        title: 'Error',
        description: 'If a form is in an error state, it will automatically show any error message blocks.',
        component: FormError,
      },
      {
        title: 'Warning',
        description: 'If a form is in warning state, it will automatically show any warning message block.',
        component: FormWarning,
      },
      {
        title: 'Field Error',
        description: 'Individual fields may display an error state',
        component: FormFieldError,
      },
      {
        title: 'Disabled Field',
        description: 'Individual fields may be disabled',
        component: FormDisabled,
      },
      {
        title: 'Read-Only Field',
        description: 'Individual fields may be read only',
        component: FormReadOnly,
      },
    ],
  },
  {
    title: 'Form Variations',
    examples: [
      {
        title: 'Size',
        description: 'A form can vary in size',
        component: FormSizeVariationMini,
      },
      {
        component: FormSizeVariationTiny,
      },
      {
        component: FormSizeVariationSmall,
      },
      {
        component: FormSizeVariationLarge,
      },
      {
        component: FormSizeVariationBig,
      },
      {
        component: FormSizeVariationHuge,
      },
      {
        component: FormSizeVariationMassive,
      },
      {
        title: 'Equal Width Form',
        description: 'Forms can automatically divide fields to be equal width',
        component: FormEqualWidth,
      },
      {
        title: 'Inverted',
        description: 'A form on a dark background may have to invert its color scheme',
        component: FormInverted,
      },
    ],
  },
  {
    title: 'Field Variations',
    examples: [
      {
        title: 'Inline Field',
        description: 'A field can have its label next to instead of above it.',
        component: FieldInline,
      },
      {
        title: 'Width',
        description: 'A field can specify its width in grid columns',
        component: FieldWidth,
      },
      {
        title: 'Required',
        description: 'A field can show that input is mandatory',
        component: FieldRequired,
      },
    ],
  },
  {
    title: 'Group Variations',
    examples: [
      {
        title: 'Evenly Divided',
        description: 'Fields can have their widths divided evenly',
        component: GroupEvenlyDivided,
      },
      {
        title: 'Grouped Fields',
        description: 'Fields can show related choices',
        component: GroupedFields,
      },
      {
        title: 'Equal Width Fields',
        description: 'Fields can automatically divide fields to be equal width',
        component: GroupEqualWidth,
      },
      {
        title: 'Inline Fields',
        description: 'Multiple fields may be inline in a row',
        component: GroupFieldsInline,
      },
      {
        component: GroupFieldsInline2,
      },
    ],
  },
];
