import Segment from './Segment.example';
import Raised from './Raised.example';
import Stacked from './Stacked.example';
import StackedTall from './StackedTall.example';
import Piled from './Piled.example';
import Vertical from './Vertical.example';
import Disabled from './Disabled.example';
import Loading from './Loading.example';
import Inverted from './Inverted.example';
import Attached from './Attached.example';
import Attached2 from './Attached2.example';
import Padded from './Padded.example';
import Padded2 from './Padded2.example';
import Compact from './Compact.example';
import Color from './Color.example';
import Color2 from './Color2.example';
import Emphasis from './Emphasis.example';
import Emphasis2 from './Emphasis2.example';
import Emphasis3 from './Emphasis3.example';
import Circular from './Circular.example';
import Clearing from './Clearing.example';
import Floated from './Floated.example';
import TextAlign from './TextAlign.example';
import Basic from './Basic.example';
import Segments from './Segments.example';
import NestedSegments from './NestedSegments.example';
import HorizontalSegments from './HorizontalSegments.example';
import RaisedSegments from './RaisedSegments.example';
import StackedSegments from './StackedSegments.example';
import PiledSegments from './PiledSegments.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Segment',
        description: 'A segment of content',
        component: Segment,
      },
      {
        title: 'Raised',
        description: 'A segment may be formatted to raise above the page',
        component: Raised,
      },
      {
        title: 'Stacked',
        description: 'A segment can be formatted to show it contains multiple pages',
        component: Stacked,
      },
      {
        component: StackedTall,
      },
      {
        title: 'Piled',
        description: 'A segment can be formatted to look like a pile of pages',
        component: Piled,
      },
      {
        title: 'Vertical Segment',
        description: 'A vertical segment formats content to be aligned as part of a vertical group',
        component: Vertical,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Disabled',
        description: 'A segment may show its content is disabled',
        component: Disabled,
      },
      {
        title: 'Loading',
        description: 'A segment may show its content is being loaded',
        component: Loading,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'A segment can have its colors inverted for contrast',
        component: Inverted,
      },
      {
        title: 'Attached',
        description: 'A segment can be attached to other content on a page',
        info:
          'Attached segments are designed to be used with other `attached` variations like `attached header` or `attached messages`.',
        component: Attached,
      },
      {
        component: Attached2,
      },
      {
        title: 'Padded',
        description: 'A segment can increase its padding',
        component: Padded,
      },
      {
        component: Padded2,
      },
      {
        title: 'Compact',
        description: 'A segment may take up only as much space as is necessary',
        component: Compact,
      },
      {
        title: 'Colored',
        description: 'A segment can be colored',
        component: Color,
      },
      {
        description: 'These colors can be inverted',
        component: Color2,
      },
      {
        title: 'Emphasis',
        description: 'A segment can be formatted to appear more or less noticeable',
        component: Emphasis,
      },
      {
        description: 'Inverted colors may also be more or less noticeable',
        component: Emphasis2,
      },
      {
        component: Emphasis3,
      },
      {
        title: 'Circular',
        info: 'A circular segment will most likely have to have its content manually sized to be equal width and height, otherwise it will flow to the size of your content',
        description: 'A segment can be circular',
        component: Circular,
      },
      {
        title: 'Clearing',
        description: 'A segment can clear floated content',
        component: Clearing,
      },
      {
        title: 'Floated',
        description: 'A segment can appear to the left or right of other content',
        component: Floated,
      },
      {
        title: 'TextAlign',
        description: 'A segment can have its text aligned to a side',
        component: TextAlign,
      },
      {
        title: 'Basic',
        description: 'A basic segment has no special formatting',
        component: Basic,
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Segments',
        description: 'A group of segments',
        component: Segments,
      },
      {
        title: 'Nested Segments',
        description: 'A group of segments can be nested in another group of segments',
        component: NestedSegments,
      },
      {
        title: 'Horizontal Segments',
        description: 'A segment group can appear horizontally',
        component: HorizontalSegments,
      },
      {
        title: 'Raised Segments',
        description: 'A group of segments can be raised',
        component: RaisedSegments,
      },
      {
        title: 'Stacked Segments',
        description: 'A group of segments can be stacked',
        component: StackedSegments,
      },
      {
        title: 'Piled Segments',
        description: 'A group of segments can be piled',
        component: PiledSegments,
      },
    ],
  },
];
