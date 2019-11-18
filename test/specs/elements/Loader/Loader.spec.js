import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Loader from 'semantic-ui-vue/elements/Loader/Loader';

describe('Loader', () => {
  testClassFromProps(Loader, [
    'ui', 'loader',
  ]);

  it('should create a SUI Loader', () => {
    const loader = shallow(Loader);
    expect(loader.is('div')).to.equal(true);
    expect(loader.classes()).to.include('ui');
    expect(loader.classes()).to.include('loader');
  });

  it('should be able to set active', () => {
    const loader1 = shallow(Loader, { propsData: { active: true } });
    expect(loader1.classes()).to.include('active');

    const loader2 = shallow(Loader, { propsData: { active: false } });
    expect(loader2.classes()).to.not.include('active');
  });

  it('should be able to set indeterminate', () => {
    const loader1 = shallow(Loader, { propsData: { indeterminate: true } });
    expect(loader1.classes()).to.include('indeterminate');

    const loader2 = shallow(Loader, { propsData: { indeterminate: false } });
    expect(loader2.classes()).to.not.include('indeterminate');
  });

  it('should be able to set content', () => {
    const loader1 = shallow(Loader, { propsData: { content: 'Loading...' } });
    expect(loader1.text()).to.equal('Loading...');

    const loader2 = shallow(Loader, { propsData: { content: '' } });
    expect(loader2.text()).to.equal('');
  });
});
