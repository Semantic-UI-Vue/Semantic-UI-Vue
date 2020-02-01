import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Button from 'semantic-ui-vue/elements/Button/Button';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

describe('Button', () => {
  testClassFromProps(Button, [
    'primary',
    'disabled',
    'loading',
    'compact',
    'secondary',
    'positive',
    'negative',
    'basic',
  ]);

  it('should create a SUI Button', () => {
    const button = shallowMount(Button);
    expect(button.is('button')).toEqual(true);
    expect(button.classes()).toContain('ui');
    expect(button.classes()).toContain('button');
  });

  it('should have a content', () => {
    const button1 = shallowMount(Button, { propsData: { content: 'foo' } });
    expect(button1.text()).toEqual('foo');

    const button2 = shallowMount(Button, {
      slots: { default: '<span>bar</span>' },
    });
    expect(button2.text()).toEqual('bar');
  });

  it('should have an icon', () => {
    const button = shallowMount(Button, { propsData: { icon: 'foo' } });
    expect(button.classes()).toContain('icon');
    expect(button.contains(Icon)).toEqual(true);
  });

  it('should be disabled when the Disabled property is true ', () => {
    const button = shallowMount(Button, {
      propsData: { content: 'foo', disabled: true },
    });
    expect(button.classes()).toContain('disabled');
  });
});
