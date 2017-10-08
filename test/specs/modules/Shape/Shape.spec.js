import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Shape from 'src/modules/Shape/Shape';

describe('Shape', () => {
  testClassFromProps(Shape, ['ui', 'shape']);
});
