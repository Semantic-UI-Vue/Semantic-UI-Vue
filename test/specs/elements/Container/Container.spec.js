import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Container from 'src/elements/Container/Container';

describe('Container', () => {
  testClassFromProps(Container, [
    'ui', 'container',
  ]);

  it('should create a SUI Container', () => {
    const container = shallow(Container);
    expect(container.is('div')).to.equal(true);
    expect(container.hasClass('ui')).to.equal(true);
    expect(container.hasClass('container')).to.equal(true);
  });

  it('should be able to set fluid', () => {
    const container1 = shallow(Container, { propsData: { fluid: true } });
    expect(container1.hasClass('fluid')).to.equal(true);

    const container2 = shallow(Container, { propsData: { fluid: false } });
    expect(container2.hasClass('fluid')).to.equal(false);
  });

  it('should be able to set text', () => {
    const container1 = shallow(Container, { propsData: { text: true } });
    expect(container1.hasClass('text')).to.equal(true);

    const container2 = shallow(Container, { propsData: { text: false } });
    expect(container2.hasClass('text')).to.equal(false);
  });

  it('should have content', () => {
    const container = shallow(Container, { slots: { default: '<span>bar</span>' } });
    expect(container.text()).to.equal('bar');
  });
});
