import Accordion from './Accordion.example';
import AccordionStyled from './AccordionStyled.example';
import AccordionInverted from './AccordionInverted.example';
import NestedAccordions from './NestedAccordions.example';
import FormFieldsAccordion from './FormFieldsAccordion.example';
import AccordionMenu from './AccordionMenu.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Accordion',
        description: 'A standard accordion',
        component: Accordion,
      },
      {
        title: 'Styled',
        description: 'A styled accordion adds basic formatting',
        component: AccordionStyled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'An accordion can be formatted to appear on dark backgrounds',
        component: AccordionInverted,
      },
    ],
  },
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
        description: 'An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form fields',
        component: FormFieldsAccordion,
      },
      {
        title: 'Accordion Menus',
        description: 'An accordion can be used to create content drawers inside a menu',
        component: AccordionMenu,
      },
    ],
  },
];
