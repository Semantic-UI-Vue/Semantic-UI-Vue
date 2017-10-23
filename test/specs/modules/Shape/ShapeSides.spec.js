import { testClassFromProps } from 'test/utils';
import ShapeSides from 'src/modules/Shape/ShapeSides';

describe('ShapeSides', () => {
  testClassFromProps(ShapeSides, ['sides']);
});
