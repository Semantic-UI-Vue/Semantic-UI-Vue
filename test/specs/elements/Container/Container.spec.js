import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Container from 'src/elements/Container/Container';

describe('Container', () => {
  testClassFromProps(Container, [
    'ui', 'container',
  ]);

  it('should create a SUI Container', () => {
    const container = shallow(Container);
    expect(container.is('div')).to.equal(true);
    expect(container.classes()).to.include('ui');
    expect(container.classes()).to.include('container');
  });

  it('should be able to set fluid', () => {
    const container1 = shallow(Container, { propsData: { fluid: true } });
    expect(container1.classes()).to.include('fluid');

    const container2 = shallow(Container, { propsData: { fluid: false } });
    expect(container2.classes()).to.not.include('fluid');
  });

  it('should be able to set text', () => {
    const container1 = shallow(Container, { propsData: { text: true } });
    expect(container1.classes()).to.include('text');

    const container2 = shallow(Container, { propsData: { text: false } });
    expect(container2.classes()).to.not.include('text');
  });

  it('should have content', () => {
    const container = shallow(Container, { slots: { default: '<span>bar</span>' } });
    expect(container.text()).to.equal('bar');
  });
});
