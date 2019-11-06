import { shallow, mount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Input from 'src/elements/Input/Input';

describe('Input', () => {
  testClassFromProps(Input, [
    'ui', 'input',
  ]);

  it('should create a SUI Input', () => {
    const input = shallow(Input);
    expect(input.is('div')).to.equal(true);
    expect(input.classes()).to.include('ui');
    expect(input.classes()).to.include('input');
  });

  it('should create a SUI Input with placeholder', () => {
    const input = shallow(Input, { propsData: { value: 'data' } });
    expect(input.find('input').element.value).to.equal('data');
  });

  it('should create a SUI Input with loading icon', () => {
    const input = mount(Input, { propsData: { loading: true } });
    expect(input.classes()).to.include('loading');
    expect(input.classes()).to.include('icon');
    expect(input.find('i').classes()).to.include('loading');
    expect(input.find('i').classes()).to.include('icon');
  });

  it('should create a SUI Input with disabled style true ', () => {
    const input = shallow(Input, { propsData: { content: 'foo', disabled: true } });
    expect(input.classes()).to.include('disabled');
  });
});
