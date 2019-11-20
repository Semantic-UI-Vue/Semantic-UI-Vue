import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Input from 'semantic-ui-vue/elements/Input/Input';

describe('Input', () => {
  testClassFromProps(Input, [
    'ui', 'input',
  ]);

  it('should create a SUI Input', () => {
    const input = shallow(Input);
    expect(input.is('div')).toEqual(true);
    expect(input.classes()).toContain('ui');
    expect(input.classes()).toContain('input');
  });

  it('should create a SUI Input with placeholder', () => {
    const input = shallow(Input, { propsData: { value: 'data' } });
    expect(input.find('input').element.value).toEqual('data');
  });

  it('should create a SUI Input with loading icon', () => {
    const input = shallow(Input, { propsData: { loading: true } });
    expect(input.classes()).toContain('loading');
    expect(input.classes()).toContain('icon');
    expect(input.find('i').classes()).toContain('loading');
    expect(input.find('i').classes()).toContain('icon');
  });

  it('should create a SUI Input with disabled style true ', () => {
    const input = shallow(Input, { propsData: { content: 'foo', disabled: true } });
    expect(input.classes()).toContain('disabled');
  });
});
