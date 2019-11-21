import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

describe('Icon', () => {
  testClassFromProps(Icon, [
    'disabled', 'fitted', 'loading',
  ]);

  it('should create a SUI Icon', () => {
    const icon = shallowMount(Icon);
    expect(icon.is('i')).toEqual(true);
    expect(icon.classes()).toContain('icon');
  });

  it('should display user icon', () => {
    const icon = shallowMount(Icon, { propsData: { name: 'user' } });
    expect(icon.classes()).toContain('user');
  });
});

