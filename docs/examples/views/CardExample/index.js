import ApprovalCard from './ApprovalCard.example';
import ButtonsCard from './ButtonsCard.example';
import Card1 from './Card1.example';
import Card2 from './Card2.example';
import CardGroup1 from './CardGroup1.example';
import CardGroup2 from './CardGroup2.example';
import CenteredCard from './CenteredCard.example';
import ColoredCard from './ColoredCard.example';
import ColumnCountCard from './ColumnCountCard.example';
import ContentBlock from './ContentBlock.example';
import DescriptionCard from './DescriptionCard.example';
import DoublingCard from './DoublingCard.example';
import ExtraContentCard from './ExtraContentCard.example';
import FloatedContentCard from './FloatedContentCard.example';
import FluidCard from './FluidCard.example';
import HeaderCard from './HeaderCard.example';
import ImageCard1 from './ImageCard1.example';
import ImageCard2 from './ImageCard2.example';
import LinkCard from './LinkCard.example';
import LinkCard1 from './LinkCard1.example';
import LinkCard2 from './LinkCard2.example';
import MetadataCard from './MetadataCard.example';
import RaisedCard from './RaisedCard.example';
import RaisedLinkCard from './RaisedLinkCard.example';
import StackableCard from './StackableCard.example';
import TextAlignmentCard from './TextAlignmentCard.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Card',
        description: 'A single card',
        component: Card1,
      },
      {
        title: '',
        description: '',
        component: Card2,
      },
      {
        title: 'Cards',
        description: 'A group of cards',
        component: CardGroup1,
      },
      {
        title: '',
        description: '',
        component: CardGroup2,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Content Block',
        description: 'A card can contain blocks of content',
        component: ContentBlock,
      },
      {
        title: 'Image',
        description: 'A card can contain an image',
        component: ImageCard1,
      },
      {
        title: '',
        description: '',
        component: ImageCard2,
      },
      {
        title: 'Header',
        description: 'A card can contain a header',
        component: HeaderCard,
      },
      {
        title: 'Metadata',
        description: 'A card can contain content metadata',
        component: MetadataCard,
      },
      {
        title: 'Link',
        description: 'A card can contain links as images, headers, or inside content',
        component: LinkCard,
      },
      {
        title: 'Buttons',
        description: 'A card can contain buttons',
        component: ButtonsCard,
      },
      {
        title: 'Approval',
        description: 'A card can contain a like or star action',
        component: ApprovalCard,
      },
      {
        title: 'Description',
        description: 'A card can contain a description with one or more paragraphs',
        component: DescriptionCard,
      },
      {
        title: 'Extra Content',
        description: 'A card can contain extra content meant to be formatted separately from the main content',
        component: ExtraContentCard,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Fluid Card',
        description: 'A fluid card takes up the width of its container',
        component: FluidCard,
      },
      {
        title: 'Centered Card',
        description: 'A card can center itself inside its container',
        component: CenteredCard,
      },
      {
        title: 'Raised Card',
        description: 'A card may be formatted to raise above the page',
        component: RaisedCard,
      },
      {
        title: '',
        description: '',
        component: RaisedLinkCard,
      },
      {
        title: 'Link Card',
        description: 'A card can be formatted so that the entire contents link to another page',
        component: LinkCard1,
      },
      {
        title: '',
        description: '',
        component: LinkCard2,
      },
      {
        title: 'Floated Content',
        description: 'Any content element can be floated left  or right',
        component: FloatedContentCard,
      },
      {
        title: 'Text Alignment',
        description: 'Any element inside a card can have its text alignment specified',
        component: TextAlignmentCard,
      },
      {
        title: 'Colored',
        description: 'A card can specify a color',
        component: ColoredCard,
      },
      {
        title: 'Column Count',
        description: 'A group of cards can set how many cards should exist in a row',
        component: ColumnCountCard,
      },
      {
        title: 'Stackable',
        description: 'A group of cards can automatically stack rows to a single column on mobile devices',
        component: StackableCard,
      },
      {
        title: 'Doubling',
        description: 'A group of cards can double its column width for mobile',
        component: DoublingCard,
      },
    ],
  },
];
