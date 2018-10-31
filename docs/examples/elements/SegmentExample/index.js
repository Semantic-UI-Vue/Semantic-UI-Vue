import Segment from './Segment.example';
import Raised from './Raised.example';
import Stacked from './Stacked.example';
import StackedTall from './StackedTall.example';
import Piled from './Piled.example';
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
