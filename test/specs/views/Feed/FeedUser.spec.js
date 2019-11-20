import { shallow } from '@vue/test-utils';
import FeedUser from 'semantic-ui-vue/views/Feed/FeedUser';

describe('FeedUser', () => {
  it('should create a SUI FeedUser', () => {
    const user = shallow(FeedUser);
    expect(user.is('a')).toEqual(true);
    expect(user.classes()).toContain('user');
    expect(user.text()).toEqual('');
  });

  it('should create a SUI FeedUser with content', () => {
    const user = shallow(FeedUser, { propsData: { content: 'Elliot' } });
    expect(user.is('a')).toEqual(true);
    expect(user.classes()).toContain('user');
    expect(user.text()).toEqual('Elliot');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const user = shallow(FeedUser, {
      propsData: {
        content: 'Elliot',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(user.is('a')).toEqual(true);
    expect(user.classes()).toContain('user');
    expect(user.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedUser with default slot', () => {
    const user = shallow(FeedUser, { slots: { default: '<span>Hera</span>' } });
    expect(user.is('a')).toEqual(true);
    expect(user.classes()).toContain('user');
    expect(user.text()).toEqual('Hera');
  });
});
