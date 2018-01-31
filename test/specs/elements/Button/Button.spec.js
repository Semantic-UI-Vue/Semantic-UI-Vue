import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Button from 'src/elements/Button/Button';
import Icon from 'src/elements/Icon/Icon';

describe('Button', () => {
  testClassFromProps(Button, [
    'primary', 'disabled', 'loading', 'compact', 'secondary', 'positive', 'negative', 'basic',
  ]);

  it('should create a SUI Button', () => {
    const button = shallow(Button);
    expect(button.is('button')).to.equal(true);
    expect(button.classes()).toContain('ui');
    expect(button.classes()).toContain('button');
  });

  it('should have a content', () => {
    const button1 = shallow(Button, { propsData: { content: 'foo' } });
    expect(button1.text()).to.equal('foo');

    const button2 = shallow(Button, { slots: { default: '<span>bar</span>' } });
    expect(button2.text()).to.equal('bar');
  });

  it('should have an icon', () => {
    const button = shallow(Button, { propsData: { icon: 'foo' } });
    expect(button.classes()).toContain('icon');
    expect(button.contains(Icon)).to.equal(true);
  });
});
