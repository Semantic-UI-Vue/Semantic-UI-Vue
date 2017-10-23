import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import ShapeSide from 'src/modules/Shape/ShapeSide';

describe('ShapeSide', () => {
  testClassFromProps(ShapeSide, ['side']);

  it('should create an active side', () => {
    const side = shallow(ShapeSide, { propsData: { active: true } });
    expect(side.element.classList.contains('active')).to.equal(true);
  });

  it('should create a hidden side', () => {
    const side = shallow(ShapeSide, { propsData: {} });
    expect(side.element.classList.contains('active')).to.equal(false);
  });

  it('should create a header side', () => {
    const side = shallow(ShapeSide, { propsData: { header: true } });
    expect(side.element.classList.contains('header')).to.equal(true);
  });
});
