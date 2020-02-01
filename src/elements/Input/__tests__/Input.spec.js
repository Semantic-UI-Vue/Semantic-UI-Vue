import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Input from 'semantic-ui-vue/elements/Input/Input';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

describe('Input', () => {
  testClassFromProps(Input, ['ui', 'input']);

  it('should create a SUI Input', () => {
    const input = shallowMount(Input);
    expect(input.is('div')).toEqual(true);
    expect(input.classes()).toContain('ui');
    expect(input.classes()).toContain('input');
  });

  it('should create a SUI Input with placeholder', () => {
    const input = shallowMount(Input, { propsData: { value: 'data' } });
    expect(input.find('input').element.value).toEqual('data');
  });

  it('should create a SUI Input with loading icon', () => {
    const input = shallowMount(Input, { propsData: { loading: true } });
    expect(input.classes()).toContain('loading');
    expect(input.classes()).toContain('icon');
    expect(input.find(Icon).props()).toMatchObject({ name: 'loading' });
  });

  it('should create a SUI Input with disabled style true ', () => {
    const input = shallowMount(Input, {
      propsData: { content: 'foo', disabled: true },
    });
    expect(input.classes()).toContain('disabled');
  });
});
