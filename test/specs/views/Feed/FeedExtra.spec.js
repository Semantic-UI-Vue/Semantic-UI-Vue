import { shallow } from 'vue-test-utils';
import FeedExtra from 'src/views/Feed/FeedExtra';

describe('FeedExtra', () => {
  it('should create a SUI FeedExtra', () => {
    const extra = shallow(FeedExtra);
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.text()).to.equal('');
  });

  it('should create a SUI FeedExtra with content', () => {
    const extra = shallow(FeedExtra, { propsData: { content: 'More text here' } });
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.hasClass('text')).to.equal(true);
    expect(extra.text()).to.equal('More text here');
  });

  it('should create a SUI FeedExtra with images class', () => {
    const extra = shallow(FeedExtra, { propsData: { images: true } });
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.hasClass('images')).to.equal(true);
    expect(extra.contains('img')).to.equal(false);
  });

  it('should create a SUI FeedExtra with images', () => {
    const extra = shallow(FeedExtra, { propsData: { images: [
      '/image0.png',
      '/image1.png',
    ] } });
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.hasClass('images')).to.equal(true);
    expect(extra.contains('img')).to.equal(true);
    const divs = extra.findAll('img');
    expect(divs.length).to.equal(2);
    expect(divs.at(0).hasAttribute('src', '/image0.png')).to.equal(true);
    expect(divs.at(1).hasAttribute('src', '/image1.png')).to.equal(true);
  });

  it('should only render default slot if both props and default slot exist', () => {
    const extra = shallow(FeedExtra, {
      propsData: {
        images: [
          '/image0.png',
          '/image1.png',
        ],
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.text()).to.equal('Only render this');
  });

  it('should create a SUI FeedExtra with default slot', () => {
    const extra = shallow(FeedExtra, { slots: { default: '<span>More text here</span>' } });
    expect(extra.is('div')).to.equal(true);
    expect(extra.hasClass('extra')).to.equal(true);
    expect(extra.text()).to.equal('More text here');
  });
});
