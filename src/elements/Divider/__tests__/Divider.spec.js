import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Divider from 'semantic-ui-vue/elements/Divider/Divider';

describe('Divider', () => {
  testClassFromProps(Divider, [
    'clearing',
    'fitted',
    'hidden',
    'horizontal',
    'inverted',
    'vertical',
  ]);

  it('should create a SUI Divider', () => {
    const divider = shallowMount(Divider);
    expect(divider.is('div')).toEqual(true);
    expect(divider.classes()).toContain('ui');
    expect(divider.classes()).toContain('divider');
  });

  it('should have content', () => {
    const divider = shallowMount(Divider, {
      slots: { default: '<span>bar</span>' },
    });
    expect(divider.text()).toEqual('bar');
  });
});
