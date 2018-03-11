import { shallow } from '@vue/test-utils';
import Feed from 'src/views/Feed/Feed';

describe('Feed', () => {
  it('should create a SUI Feed', () => {
    const feed = shallow(Feed);
    expect(feed.is('div')).to.equal(true);
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('feed');
    expect(feed.text()).to.equal('');
  });

  it('should create a SUI Feed with small size', () => {
    const feed = shallow(Feed, { propsData: { size: 'small' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('small');
    expect(feed.classes()).to.include('feed');
    expect(feed.text()).to.equal('');
  });

  it('should create a SUI Feed with large size', () => {
    const feed = shallow(Feed, { propsData: { size: 'large' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('large');
    expect(feed.classes()).to.include('feed');
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
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('feed');
    const divs = feed.findAll('div');
    expect(divs.length).is.equal(8);
    expect(divs.at(1).classes()).to.include('event');
    expect(divs.at(2).classes()).to.include('label');
    expect(divs.at(2).contains('i')).to.equal(true);
    expect(divs.at(2).find('i').classes()).to.include('pencil');
    expect(divs.at(3).classes()).to.include('content');
    expect(divs.at(3).text()).to.equal('This is a feed event');
    expect(divs.at(4).classes()).to.include('event');
    expect(divs.at(5).classes()).to.include('label');
    expect(divs.at(5).contains('img')).to.equal(true);
    expect(divs.at(5).find('img').attributes().src).to.equal('/avatar.png');
    expect(divs.at(6).classes()).to.include('content');
    expect(divs.at(7).classes()).to.include('summary');
    expect(divs.at(7).text()).to.equal('This is a feed summary');
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
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('feed');
    const divs = feed.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).text('')).to.equal('Event default slot');
  });

  it('should create a SUI Feed with default slot', () => {
    const feed = shallow(Feed, { slots: { default: '<span>This is a feed</span>' } });
    expect(feed.is('div')).to.equal(true);
    expect(feed.classes()).to.include('ui');
    expect(feed.classes()).to.include('feed');
    expect(feed.text()).to.equal('This is a feed');
  });
});
