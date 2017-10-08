import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Shape from 'src/modules/Shape/Shape';

describe('Shape', () => {
  testClassFromProps(Shape, ['ui', 'shape']);

  it('should create a SUI square cube', () => {
    const cube = shallow(Shape, { propsData: { cube: true, square: true } });
    expect(cube.element.classList.contains('cube')).to.equal(true);
    expect(cube.element.classList.contains('square')).to.equal(true);
  });
});
