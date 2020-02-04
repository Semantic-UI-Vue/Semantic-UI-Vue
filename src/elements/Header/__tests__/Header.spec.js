import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Header from 'semantic-ui-vue/elements/Header/Header';

describe('Header', () => {
  testClassFromProps(Header, ['ui', 'header']);

  it('should create a SUI Header', () => {
    const header = shallowMount(Header);
    expect(header.is('div')).toEqual(true);
    expect(header.classes()).toContain('ui');
    expect(header.classes()).toContain('header');
  });

  it('should have a color', () => {
    const header = shallowMount(Header, { propsData: { color: 'red' } });
    expect(header.classes()).toContain('red');
  });

  it('should have a size', () => {
    const header = shallowMount(Header, { propsData: { size: 'small' } });
    expect(header.classes()).toContain('small');
  });

  it('should have a floated class', () => {
    const header = shallowMount(Header, { propsData: { floated: 'left' } });
    expect(header.classes()).toContain('floated');
    expect(header.classes()).toContain('left');
  });

  it('should have an image class', () => {
    const header = shallowMount(Header, {
      propsData: { image: 'test-image.jpg' },
    });
    expect(header.classes()).toContain('image');
  });

  it('should have a sub class', () => {
    const header = shallowMount(Header, { propsData: { sub: true } });
    expect(header.classes()).toContain('sub');
  });

  it('should have content', () => {
    const header1 = shallowMount(Header, {
      propsData: { content: 'Content String' },
    });
    expect(header1.text()).toEqual('Content String');

    const header2 = shallowMount(Header, {
      slots: { default: '<span>Content String</span>' },
    });
    expect(header2.text()).toEqual('Content String');
  });

  it('should have an icon class', () => {
    const header = shallowMount(Header, { propsData: { icon: 'settings' } });
    expect(header.classes()).toContain('icon');
    expect(!!header.find('.icon.settings')).toEqual(true);
  });
});
