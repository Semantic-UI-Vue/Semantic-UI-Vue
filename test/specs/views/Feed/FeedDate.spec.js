import { shallow } from 'vue-test-utils';
import FeedDate from 'src/views/Feed/FeedDate';

describe('FeedDate', () => {
  it('should create a SUI FeedDate', () => {
    const date = shallow(FeedDate);
    expect(date.is('div')).to.equal(true);
    expect(date.hasClass('date')).to.equal(true);
    expect(date.text()).to.equal('');
  });

  it('should create a SUI FeedDate with content', () => {
    const date = shallow(FeedDate, { propsData: { content: '3 hours ago' } });
    expect(date.is('div')).to.equal(true);
    expect(date.hasClass('date')).to.equal(true);
    expect(date.text()).to.equal('3 hours ago');
  });

  it('should create a SUI FeedDate with default slot', () => {
    const date = shallow(FeedDate, { slots: { default: '<span>3 hours ago</span>' } });
    expect(date.is('div')).to.equal(true);
    expect(date.hasClass('date')).to.equal(true);
    expect(date.text()).to.equal('3 hours ago');
  });
});
