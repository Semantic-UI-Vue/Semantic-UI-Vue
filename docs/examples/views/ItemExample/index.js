import ItemGroup from './ItemGroup.example';
import ContentImage from './ContentImage.example';
import ContentContent from './ContentContent.example';
import ContentHeader from './ContentHeader.example';
import ContentMeta from './ContentMeta.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Items',
        description: 'A group of items',
        component: ItemGroup,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Image',
        description: 'An item can contain an image',
        component: ContentImage,
      },
      {
        title: 'Content',
        description: 'An item can contain content',
        component: ContentContent,
      },
      {
        title: 'Header',
        description: 'An item can contain a header',
        component: ContentHeader,
      },
      {
        title: 'Metadata',
        description: 'An item can contain content metadata',
        component: ContentMeta,
      },
    ],
  },
];
