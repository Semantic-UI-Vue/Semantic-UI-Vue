import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Icon from 'src/elements/Icon/Icon';

describe('Icon', () => {
  testClassFromProps(Icon, [
    'disabled', 'fitted', 'loading',
  ]);

  it('should create a SUI Icon', () => {
    const icon = shallow(Icon);
    expect(icon.is('i')).to.equal(true);
    expect(icon.classes()).to.include('icon');
  });

  it('should display user icon', () => {
    const icon = shallow(Icon, { propsData: { name: 'user' } });
    expect(icon.classes()).to.include('user');
  });
});

