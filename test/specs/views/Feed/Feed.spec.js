import { shallow } from 'vue-test-utils';
import Feed from 'src/views/Feed/Feed';

describe('Feed', () => {
  it('should create a SUI Feed', () => {
    const feed = shallow(Feed);
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.text()).to.equal('');
  });

  it('should create a SUI Feed with small size', () => {
    const feed = shallow(Feed, { propsData: { size: 'small' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('small')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.text()).to.equal('');
  });

  it('should create a SUI Feed with large size', () => {
    const feed = shallow(Feed, { propsData: { size: 'large' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('large')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.text()).to.equal('');
  });

  it('should create a SUI Feed events', () => {
    const events = [
      {
        icon: 'pencil',
        content: 'This is a feed event',
      },
      {
        image: '/avatar.png',
        summary: 'This is a feed summary',
      },
    ];
    const feed = shallow(Feed, {
      propsData: {
        events,
      },
    });
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.findAll('div').length).is.equal(8);
    expect(feed.findAll('div').at(1).hasClass('event')).to.equal(true);
    expect(feed.findAll('div').at(2).hasClass('label')).to.equal(true);
    expect(feed.findAll('div').at(2).contains('i')).to.equal(true);
    expect(feed.findAll('div').at(2).find('i').hasClass('pencil')).to.equal(true);
    expect(feed.findAll('div').at(3).hasClass('content')).to.equal(true);
    expect(feed.findAll('div').at(3).text()).to.equal('This is a feed event');
    expect(feed.findAll('div').at(4).hasClass('event')).to.equal(true);
    expect(feed.findAll('div').at(5).hasClass('label')).to.equal(true);
    expect(feed.findAll('div').at(5).contains('img')).to.equal(true);
    expect(feed.findAll('div').at(5).find('img').hasAttribute('src', '/avatar.png')).to.equal(true);
    expect(feed.findAll('div').at(6).hasClass('content')).to.equal(true);
    expect(feed.findAll('div').at(7).hasClass('summary')).to.equal(true);
    expect(feed.findAll('div').at(7).text()).to.equal('This is a feed summary');
  });

  it('should only render default slot if a SUI Feed has both events prop and default slot', () => {
    const events = [
      {
        icon: 'pencil',
        content: 'This is a feed event',
      },
      {
        image: '/avatar.png',
        summary: 'This is a feed summary',
      },
    ];
    const feed = shallow(Feed, {
      propsData: {
        events,
      },
      slots: {
        default: '<div>Event default slot</div>',
      },
    });
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.findAll('div').length).is.equal(2);
    expect(feed.findAll('div').at(1).text('')).to.equal('Event default slot');
  });

  it('should create a SUI Feed with default slot', () => {
    const feed = shallow(Feed, { slots: { default: '<span>This is a feed</span>' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.hasClass('ui')).to.equal(true);
    expect(feed.hasClass('feed')).to.equal(true);
    expect(feed.text()).to.equal('This is a feed');
  });
});
