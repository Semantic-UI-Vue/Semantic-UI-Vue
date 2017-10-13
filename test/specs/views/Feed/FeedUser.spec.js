import { shallow } from 'vue-test-utils';
import FeedUser from 'src/views/Feed/FeedUser';

describe('FeedUser', () => {
  it('should create a SUI FeedUser', () => {
    const user = shallow(FeedUser);
    expect(user.is('a'));
    expect(user.hasClass('user'));
  });

  it('should create a SUI FeedUser with content', () => {
    const user = shallow(FeedUser, { propsData: { content: 'Eliwood' } });
    expect(user.is('a'));
    expect(user.hasClass('user'));
    expect(user.text()).to.equal('Eliwood');
  });

  it('should create a SUI FeedUser with default slot', () => {
    const user = shallow(FeedUser, { slots: { default: '<span>Hector</span>' } });
    expect(user.is('a'));
    expect(user.hasClass('user'));
    expect(user.text()).to.equal('Hector');
  });
});
