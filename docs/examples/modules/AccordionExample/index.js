import NestedAccordions from './NestedAccordions.example';
import FormFieldsAccordion from './FormFieldsAccordion.example';

export default [
  {
    title: 'Examples',
    examples: [
      {
        title: 'Nested Accordions',
        description: 'An accordion can have multiple levels of nested content. This content can either be in a nested accordion or simply another level of title and content',
        component: NestedAccordions,
      },
      {
        title: 'Form Fields',
        description: 'An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form fields.',
        component: FormFieldsAccordion,
      },
    ],
  },
];
