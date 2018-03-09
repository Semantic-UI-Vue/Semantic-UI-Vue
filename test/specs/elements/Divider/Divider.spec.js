import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Divider from 'src/elements/Divider/Divider';

describe('Divider', () => {
  testClassFromProps(Divider, [
    'clearing', 'fitted', 'hidden', 'horizontal', 'inverted', 'vertical',
  ]);

  it('should create a SUI Divider', () => {
    const divider = shallow(Divider);
    expect(divider.is('div')).to.equal(true);
    expect(divider.classes()).to.include('ui');
    expect(divider.classes()).to.include('divider');
  });

  it('should have content', () => {
    const divider = shallow(Divider, { slots: { default: '<span>bar</span>' } });
    expect(divider.text()).to.equal('bar');
  });
});
