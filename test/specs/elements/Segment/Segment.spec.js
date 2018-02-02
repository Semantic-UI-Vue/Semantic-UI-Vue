import { testClassFromProps } from 'test/utils';
import Segment from 'src/elements/Segment/Button';

describe('Segment', () => {
  testClassFromProps(Segment, [
    'attached', 'basic', 'padded', 'inverted', 'stacked', 'piled', 'raised', 'vertical',
  ]);
});
