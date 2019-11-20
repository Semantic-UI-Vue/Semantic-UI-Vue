import { shallow } from '@vue/test-utils';
import FeedLike from 'semantic-ui-vue/views/Feed/FeedLike';

describe('FeedLike', () => {
  it('should create a SUI FeedLike', () => {
    const like = shallow(FeedLike);
    expect(like.is('a')).toEqual(true);
    expect(like.classes()).toContain('like');
    expect(like.text()).toEqual('');
  });

  it('should create a SUI FeedLike with content', () => {
    const like = shallow(FeedLike, { propsData: { content: '4 likes' } });
    expect(like.is('a')).toEqual(true);
    expect(like.classes()).toContain('like');
    expect(like.text()).toEqual('4 likes');
  });

  it('should create a SUI FeedLike with icon', () => {
    const like = shallow(FeedLike, { propsData: { icon: 'like', content: '4 likes' } });
    expect(like.is('a')).toEqual(true);
    expect(like.classes()).toContain('like');
    expect(like.text()).toEqual('4 likes');
    expect(like.contains('i')).toEqual(true);
    expect(like.find('i').classes()).toContain('like');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const like = shallow(FeedLike, {
      propsData: {
        icon: 'like',
        content: '4 likes',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(like.is('a')).toEqual(true);
    expect(like.classes()).toContain('like');
    expect(like.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedLike with default slot', () => {
    const like = shallow(FeedLike, { slots: { default: '<span>4 likes</span>' } });
    expect(like.is('a')).toEqual(true);
    expect(like.classes()).toContain('like');
    expect(like.text()).toEqual('4 likes');
  });
});
