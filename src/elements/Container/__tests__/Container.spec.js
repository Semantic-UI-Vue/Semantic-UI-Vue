import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Container from 'semantic-ui-vue/elements/Container/Container';

describe('Container', () => {
  testClassFromProps(Container, ['ui', 'container']);

  it('should create a SUI Container', () => {
    const container = shallowMount(Container);
    expect(container.is('div')).toEqual(true);
    expect(container.classes()).toContain('ui');
    expect(container.classes()).toContain('container');
  });

  it('should be able to set fluid', () => {
    const container1 = shallowMount(Container, { propsData: { fluid: true } });
    expect(container1.classes()).toContain('fluid');

    const container2 = shallowMount(Container, { propsData: { fluid: false } });
    expect(container2.classes()).not.toContain('fluid');
  });

  it('should be able to set text', () => {
    const container1 = shallowMount(Container, { propsData: { text: true } });
    expect(container1.classes()).toContain('text');

    const container2 = shallowMount(Container, { propsData: { text: false } });
    expect(container2.classes()).not.toContain('text');
  });

  it('should have content', () => {
    const container = shallowMount(Container, {
      slots: { default: '<span>bar</span>' },
    });
    expect(container.text()).toEqual('bar');
  });
});
