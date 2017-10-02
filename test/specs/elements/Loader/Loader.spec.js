import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Loader from 'src/elements/Loader/Loader';

describe('Loader', () => {
  testClassFromProps(Loader, [
    'ui', 'loader',
  ]);

  it('should create a SUI Loader', () => {
    const loader = shallow(Loader);
    expect(loader.is('div')).to.equal(true);
    expect(loader.hasClass('ui')).to.equal(true);
    expect(loader.hasClass('loader')).to.equal(true);
  });

  it('should be able to set active', () => {
    const loader1 = shallow(Loader, { propsData: { active: true } });
    expect(loader1.hasClass('active')).to.equal(true);

    const loader2 = shallow(Loader, { propsData: { active: false } });
    expect(loader2.hasClass('active')).to.equal(false);
  });

  it('should be able to set indeterminate', () => {
    const loader1 = shallow(Loader, { propsData: { indeterminate: true } });
    expect(loader1.hasClass('indeterminate')).to.equal(true);

    const loader2 = shallow(Loader, { propsData: { indeterminate: false } });
    expect(loader2.hasClass('indeterminate')).to.equal(false);
  });

  it('should be able to set content', () => {
    const loader1 = shallow(Loader, { propsData: { content: 'Loading...' } });
    expect(loader1.text()).to.equal('Loading...');

    const loader2 = shallow(Loader, { propsData: { content: '' } });
    expect(loader2.text()).to.equal('');
  });
});
