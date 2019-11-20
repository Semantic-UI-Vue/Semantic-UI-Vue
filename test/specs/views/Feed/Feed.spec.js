import { shallow } from '@vue/test-utils';
import Feed from 'semantic-ui-vue/views/Feed/Feed';

describe('Feed', () => {
  it('should create a SUI Feed', () => {
    const feed = shallow(Feed);
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('feed');
    expect(feed.text()).toEqual('');
  });

  it('should create a SUI Feed with small size', () => {
    const feed = shallow(Feed, { propsData: { size: 'small' } });
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('small');
    expect(feed.classes()).toContain('feed');
    expect(feed.text()).toEqual('');
  });

  it('should create a SUI Feed with large size', () => {
    const feed = shallow(Feed, { propsData: { size: 'large' } });
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('large');
    expect(feed.classes()).toContain('feed');
    expect(feed.text()).toEqual('');
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
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('feed');
    const divs = feed.findAll('div');
    expect(divs.length).is.equal(8);
    expect(divs.at(1).classes()).toContain('event');
    expect(divs.at(2).classes()).toContain('label');
    expect(divs.at(2).contains('i')).toEqual(true);
    expect(divs.at(2).find('i').classes()).toContain('pencil');
    expect(divs.at(3).classes()).toContain('content');
    expect(divs.at(3).text()).toEqual('This is a feed event');
    expect(divs.at(4).classes()).toContain('event');
    expect(divs.at(5).classes()).toContain('label');
    expect(divs.at(5).contains('img')).toEqual(true);
    expect(divs.at(5).find('img').attributes().src).toEqual('/avatar.png');
    expect(divs.at(6).classes()).toContain('content');
    expect(divs.at(7).classes()).toContain('summary');
    expect(divs.at(7).text()).toEqual('This is a feed summary');
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
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('feed');
    const divs = feed.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).text('')).toEqual('Event default slot');
  });

  it('should create a SUI Feed with default slot', () => {
    const feed = shallow(Feed, { slots: { default: '<span>This is a feed</span>' } });
    expect(feed.is('div')).toEqual(true);
    expect(feed.classes()).toContain('ui');
    expect(feed.classes()).toContain('feed');
    expect(feed.text()).toEqual('This is a feed');
  });
});
