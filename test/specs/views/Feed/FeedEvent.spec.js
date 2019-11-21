import { shallowMount } from '@vue/test-utils';
import FeedEvent from 'semantic-ui-vue/views/Feed/FeedEvent';

describe('FeedEvent', () => {
  it('should create a SUI FeedEvent', () => {
    const event = shallowMount(FeedEvent);
    expect(event.is('div')).toEqual(true);
    expect(event.classes()).toContain('event');
    expect(event.text()).toEqual('');
  });

  it('should create a SUI FeedEvent with content', () => {
    const event = shallowMount(FeedEvent, { propsData: { content: 'This is a feed event' } });
    expect(event.is('div')).toEqual(true);
    expect(event.classes()).toContain('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).classes()).toContain('content');
    expect(divs.at(1).text()).toEqual('This is a feed event');
  });

  it('should create a SUI FeedEvent with icon, content and default slot', () => {
    const event = shallowMount(FeedEvent, {
      propsData: {
        icon: 'pencil',
        content: 'This is a feed event',
      },
      slots: {
        default: '<div>Event default slot</div>',
      },
    });
    expect(event.is('div')).toEqual(true);
    expect(event.classes()).toContain('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(4);
    expect(divs.at(1).classes()).toContain('label');
    expect(divs.at(1).contains('i')).toEqual(true);
    expect(divs.at(1).find('i').classes()).toContain('pencil');
    expect(divs.at(2).classes()).toContain('content');
    expect(divs.at(2).text()).toEqual('This is a feed event');
    expect(divs.at(3).text()).toEqual('Event default slot');
  });

  it('should create a SUI FeedEvent with image avatar, content and default slot', () => {
    const event = shallowMount(FeedEvent, {
      propsData: {
        image: '/avatar.png',
        content: 'This is a feed event',
        date: '2 hours ago',
        summary: 'Event summary',
        extraImages: ['/image0.png', '/image1.png'],
        extraText: 'Extra text',
        meta: '4 likes',
      },
      slots: {
        default: '<div>Event default slot</div>',
      },
    });
    expect(event.is('div')).toEqual(true);
    expect(event.classes()).toContain('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(9);
    expect(divs.at(1).classes()).toContain('label');
    expect(divs.at(1).contains('img')).toEqual(true);
    expect(divs.at(1).find('img').attributes().src).toEqual('/avatar.png');
    expect(divs.at(2).classes()).toContain('content');
    expect(divs.at(3).classes()).toContain('date');
    expect(divs.at(3).text()).toEqual('2 hours ago');
    expect(divs.at(4).classes()).toContain('summary');
    expect(divs.at(4).text()).toEqual('Event summary');
    expect(divs.at(5).classes()).toContain('extra');
    expect(divs.at(5).classes()).toContain('text');
    expect(divs.at(5).text()).toEqual('Extra text');
    expect(divs.at(6).classes()).toContain('extra');
    expect(divs.at(6).classes()).toContain('images');
    const extraImgs = divs.at(6).findAll('img');
    expect(extraImgs.length).toEqual(2);
    expect(extraImgs.at(0).attributes().src).toEqual('/image0.png');
    expect(extraImgs.at(1).attributes().src).toEqual('/image1.png');
    expect(divs.at(7).classes()).toContain('meta');
    expect(divs.at(7).text()).toEqual('4 likes');
    expect(divs.at(8).text()).toEqual('Event default slot');
  });

  it('should create a SUI FeedEvent with default slot', () => {
    const event = shallowMount(FeedEvent, { slots: { default: '<span>This is a feed event</span>' } });
    expect(event.is('div')).toEqual(true);
    expect(event.classes()).toContain('event');
    expect(event.text()).toEqual('This is a feed event');
  });
});
