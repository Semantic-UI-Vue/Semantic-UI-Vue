import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Header from 'src/elements/Header/Header';

describe('Header', () => {
  testClassFromProps(Header, [
    'ui', 'header',
  ]);

  it('should create a SUI Header', () => {
    const header = shallow(Header);
    expect(header.is('div')).to.equal(true);
    expect(header.hasClass('ui')).to.equal(true);
    expect(header.hasClass('header')).to.equal(true);
  });

  it('should have a color', () => {
    const header = shallow(Header, { propsData: { color: 'red' } });
    expect(header.hasClass('red')).to.equal(true);
  });

  it('should have a size', () => {
    const header = shallow(Header, { propsData: { size: '12' } });
    expect(header.hasClass('12')).to.equal(true);
  });

  it('should have a icon class', () => {
    const header = shallow(Header, { propsData: { icon: true } });
    expect(header.hasClass('icon')).to.equal(true);
  });

  it('should have a floated class', () => {
    const header = shallow(Header, { propsData: { floated: 'left' } });
    expect(header.hasClass('floated')).to.equal(true);
    expect(header.hasClass('left')).to.equal(true);
  });

  it('should have an image class', () => {
    const header = shallow(Header, { propsData: { image: true } });
    expect(header.hasClass('image')).to.equal(true);
  });

  it('should have a sub class', () => {
    const header = shallow(Header, { propsData: { sub: true } });
    expect(header.hasClass('sub')).to.equal(true);
  });

  it('should have content', () => {
    const header1 = shallow(Header, { propsData: { content: 'Content String' } });
    expect(header1.text()).to.equal('Content String');

    const header2 = shallow(Header, { slots: { default: '<span>Content String</span>' } });
    expect(header2.text()).to.equal('Content String');
  });
});
