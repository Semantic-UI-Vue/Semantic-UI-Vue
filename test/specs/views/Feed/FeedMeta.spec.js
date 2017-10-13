import { shallow } from 'vue-test-utils';
import FeedMeta from 'src/views/Feed/FeedMeta';

describe('FeedMeta', () => {
  it('should create a SUI FeedMeta', () => {
    const meta = shallow(FeedMeta);
    expect(meta.is('div')).to.equal(true);
    expect(meta.hasClass('meta')).to.equal(true);
    expect(meta.text()).to.equal('');
  });

  it('should create a SUI FeedMeta with content', () => {
    const meta = shallow(FeedMeta, { propsData: { content: 'Primary meta content' } });
    expect(meta.is('div')).to.equal(true);
    expect(meta.hasClass('meta')).to.equal(true);
    expect(meta.text()).to.equal('Primary meta content');
  });

  it('should create a SUI FeedMeta with FeedLike', () => {
    const meta = shallow(FeedMeta, { propsData: { like: '4 likes' } });
    expect(meta.is('div')).to.equal(true);
    expect(meta.hasClass('meta')).to.equal(true);
    expect(meta.contains('a')).to.equal(true);
    expect(meta.find('a').hasClass('like')).to.equal(true);
    expect(meta.find('a').text()).to.equal('4 likes');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const meta = shallow(FeedMeta, {
      propsData: {
        like: '4 likes',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(meta.is('div')).to.equal(true);
    expect(meta.hasClass('meta')).to.equal(true);
    expect(meta.text()).to.equal('Only render this');
  });

  it('should create a SUI FeedMeta with default slot', () => {
    const meta = shallow(FeedMeta, { slots: { default: '<span>Meta text</span>' } });
    expect(meta.is('div')).to.equal(true);
    expect(meta.hasClass('meta')).to.equal(true);
    expect(meta.text()).to.equal('Meta text');
  });
});
