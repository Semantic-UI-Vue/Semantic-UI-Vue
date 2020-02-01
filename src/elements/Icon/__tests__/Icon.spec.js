import { shallowMount } from '@vue/test-utils';
import { testClassFromProps, withRequired } from 'test/utils';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

const IconWithRequired = withRequired(Icon, { name: 'test' });

describe('Icon', () => {
  testClassFromProps(IconWithRequired, ['disabled', 'fitted', 'loading']);

  it('should create a SUI Icon', () => {
    const icon = shallowMount(IconWithRequired);
    expect(icon.is('i')).toEqual(true);
    expect(icon.classes()).toContain('icon');
  });

  it('should display user icon', () => {
    const icon = shallowMount(IconWithRequired, { propsData: { name: 'foo' } });
    expect(icon.classes()).toContain('foo');
  });
});
