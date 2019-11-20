import { shallow } from '@vue/test-utils';
import FeedMeta from 'semantic-ui-vue/views/Feed/FeedMeta';

describe('FeedMeta', () => {
  it('should create a SUI FeedMeta', () => {
    const meta = shallow(FeedMeta);
    expect(meta.is('div')).toEqual(true);
    expect(meta.classes()).toContain('meta');
    expect(meta.text()).toEqual('');
  });

  it('should create a SUI FeedMeta with content', () => {
    const meta = shallow(FeedMeta, { propsData: { content: 'Primary meta content' } });
    expect(meta.is('div')).toEqual(true);
    expect(meta.classes()).toContain('meta');
    expect(meta.text()).toEqual('Primary meta content');
  });

  it('should create a SUI FeedMeta with FeedLike', () => {
    const meta = shallow(FeedMeta, { propsData: { like: '4 likes' } });
    expect(meta.is('div')).toEqual(true);
    expect(meta.classes()).toContain('meta');
    expect(meta.contains('a')).toEqual(true);
    expect(meta.find('a').classes()).toContain('like');
    expect(meta.find('a').text()).toEqual('4 likes');
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
    expect(meta.is('div')).toEqual(true);
    expect(meta.classes()).toContain('meta');
    expect(meta.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedMeta with default slot', () => {
    const meta = shallow(FeedMeta, { slots: { default: '<span>Meta text</span>' } });
    expect(meta.is('div')).toEqual(true);
    expect(meta.classes()).toContain('meta');
    expect(meta.text()).toEqual('Meta text');
  });
});
