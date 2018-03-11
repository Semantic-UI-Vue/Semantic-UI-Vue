import { shallow } from '@vue/test-utils';
import FeedUser from 'src/views/Feed/FeedUser';

describe('FeedUser', () => {
  it('should create a SUI FeedUser', () => {
    const user = shallow(FeedUser);
    expect(user.is('a')).to.equal(true);
    expect(user.classes()).to.include('user');
    expect(user.text()).to.equal('');
  });

  it('should create a SUI FeedUser with content', () => {
    const user = shallow(FeedUser, { propsData: { content: 'Elliot' } });
    expect(user.is('a')).to.equal(true);
    expect(user.classes()).to.include('user');
    expect(user.text()).to.equal('Elliot');
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
    expect(user.is('a')).to.equal(true);
    expect(user.classes()).to.include('user');
    expect(user.text()).to.equal('Only render this');
  });

  it('should create a SUI FeedUser with default slot', () => {
    const user = shallow(FeedUser, { slots: { default: '<span>Hera</span>' } });
    expect(user.is('a')).to.equal(true);
    expect(user.classes()).to.include('user');
    expect(user.text()).to.equal('Hera');
  });
});
