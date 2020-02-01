import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Loader from 'semantic-ui-vue/elements/Loader/Loader';

describe('Loader', () => {
  testClassFromProps(Loader, ['ui', 'loader']);

  it('should create a SUI Loader', () => {
    const loader = shallowMount(Loader);
    expect(loader.is('div')).toEqual(true);
    expect(loader.classes()).toContain('ui');
    expect(loader.classes()).toContain('loader');
  });

  it('should be able to set active', () => {
    const loader1 = shallowMount(Loader, { propsData: { active: true } });
    expect(loader1.classes()).toContain('active');

    const loader2 = shallowMount(Loader, { propsData: { active: false } });
    expect(loader2.classes()).not.toContain('active');
  });

  it('should be able to set indeterminate', () => {
    const loader1 = shallowMount(Loader, {
      propsData: { indeterminate: true },
    });
    expect(loader1.classes()).toContain('indeterminate');

    const loader2 = shallowMount(Loader, {
      propsData: { indeterminate: false },
    });
    expect(loader2.classes()).not.toContain('indeterminate');
  });

  it('should be able to set content', () => {
    const loader1 = shallowMount(Loader, {
      propsData: { content: 'Loading...' },
    });
    expect(loader1.text()).toEqual('Loading...');

    const loader2 = shallowMount(Loader, { propsData: { content: '' } });
    expect(loader2.text()).toEqual('');
  });
});
