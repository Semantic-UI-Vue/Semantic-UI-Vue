import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Header from 'src/elements/Header/Header';

describe('Header', () => {
  testClassFromProps(Header, [
    'ui', 'header',
  ]);

  it('should create a SUI Header', () => {
    const header = shallow(Header);
    expect(header.is('div')).to.equal(true);
    expect(header.classes()).to.include('ui');
    expect(header.classes()).to.include('header');
  });

  it('should have a color', () => {
    const header = shallow(Header, { propsData: { color: 'red' } });
    expect(header.classes()).to.include('red');
  });

  it('should have a size', () => {
    const header = shallow(Header, { propsData: { size: '12' } });
    expect(header.classes()).to.include('12');
  });

  it('should have a icon class', () => {
    const header = shallow(Header, { propsData: { icon: true } });
    expect(header.classes()).to.include('icon');
  });

  it('should have a floated class', () => {
    const header = shallow(Header, { propsData: { floated: 'left' } });
    expect(header.classes()).to.include('floated');
    expect(header.classes()).to.include('left');
  });

  it('should have an image class', () => {
    const header = shallow(Header, { propsData: { image: true } });
    expect(header.classes()).to.include('image');
  });

  it('should have a sub class', () => {
    const header = shallow(Header, { propsData: { sub: true } });
    expect(header.classes()).to.include('sub');
  });

  it('should have content', () => {
    const header1 = shallow(Header, { propsData: { content: 'Content String' } });
    expect(header1.text()).to.equal('Content String');

    const header2 = shallow(Header, { slots: { default: '<span>Content String</span>' } });
    expect(header2.text()).to.equal('Content String');
  });
});
