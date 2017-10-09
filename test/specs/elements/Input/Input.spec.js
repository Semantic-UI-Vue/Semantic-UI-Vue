import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Input from 'src/elements/Input/Input';

describe('Input', () => {
  testClassFromProps(Input, [
    'ui', 'input',
  ]);

  it('should create a SUI Input', () => {
    const input = shallow(Input);
    expect(input.is('div')).to.equal(true);
    expect(input.hasClass('ui')).to.equal(true);
    expect(input.hasClass('input')).to.equal(true);
  });

  it('should create a SUI Input with placeholder', () => {
    const input = shallow(Input, { propsData: { value: 'data' } });
    expect(input.find('input').element.value).to.equal('data');
  });

  it('should create a SUI Input with loading icon', () => {
    const input = shallow(Input, { propsData: { loading: true } });
    expect(input.hasClass('loading')).to.equal(true);
    expect(input.hasClass('icon')).to.equal(true);
    expect(input.find('i').hasClass('loading')).to.equal(true);
    expect(input.find('i').hasClass('icon')).to.equal(true);
  });
});
