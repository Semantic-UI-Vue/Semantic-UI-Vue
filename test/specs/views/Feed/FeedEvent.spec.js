import { shallow, mount } from '@vue/test-utils';
import FeedEvent from 'src/views/Feed/FeedEvent';

describe('FeedEvent', () => {
  it('should create a SUI FeedEvent', () => {
    const event = shallow(FeedEvent);
    expect(event.is('div')).to.equal(true);
    expect(event.classes()).to.include('event');
    expect(event.text()).to.equal('');
  });

  it('should create a SUI FeedEvent with content', () => {
    const event = mount(FeedEvent, { propsData: { content: 'This is a feed event' } });
    expect(event.is('div')).to.equal(true);
    expect(event.classes()).to.include('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).classes()).to.include('content');
    expect(divs.at(1).text()).to.equal('This is a feed event');
  });

  it('should create a SUI FeedEvent with icon, content and default slot', () => {
    const event = mount(FeedEvent, {
      propsData: {
        icon: 'pencil',
        content: 'This is a feed event',
      },
      slots: {
        default: '<div>Event default slot</div>',
      },
    });
    expect(event.is('div')).to.equal(true);
    expect(event.classes()).to.include('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(4);
    expect(divs.at(1).classes()).to.include('label');
    expect(divs.at(1).contains('i')).to.equal(true);
    expect(divs.at(1).find('i').classes()).to.include('pencil');
    expect(divs.at(2).classes()).to.include('content');
    expect(divs.at(2).text()).to.equal('This is a feed event');
    expect(divs.at(3).text()).to.equal('Event default slot');
  });

  it('should create a SUI FeedEvent with image avatar, content and default slot', () => {
    const event = mount(FeedEvent, {
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
    expect(event.is('div')).to.equal(true);
    expect(event.classes()).to.include('event');
    const divs = event.findAll('div');
    expect(divs.length).is.equal(9);
    expect(divs.at(1).classes()).to.include('label');
    expect(divs.at(1).contains('img')).to.equal(true);
    expect(divs.at(1).find('img').attributes().src).to.equal('/avatar.png');
    expect(divs.at(2).classes()).to.include('content');
    expect(divs.at(3).classes()).to.include('date');
    expect(divs.at(3).text()).to.equal('2 hours ago');
    expect(divs.at(4).classes()).to.include('summary');
    expect(divs.at(4).text()).to.equal('Event summary');
    expect(divs.at(5).classes()).to.include('extra');
    expect(divs.at(5).classes()).to.include('text');
    expect(divs.at(5).text()).to.equal('Extra text');
    expect(divs.at(6).classes()).to.include('extra');
    expect(divs.at(6).classes()).to.include('images');
    const extraImgs = divs.at(6).findAll('img');
    expect(extraImgs.length).to.equal(2);
    expect(extraImgs.at(0).attributes().src).to.equal('/image0.png');
    expect(extraImgs.at(1).attributes().src).to.equal('/image1.png');
    expect(divs.at(7).classes()).to.include('meta');
    expect(divs.at(7).text()).to.equal('4 likes');
    expect(divs.at(8).text()).to.equal('Event default slot');
  });

  it('should create a SUI FeedEvent with default slot', () => {
    const event = mount(FeedEvent, { slots: { default: '<span>This is a feed event</span>' } });
    expect(event.is('div')).to.equal(true);
    expect(event.classes()).to.include('event');
    expect(event.text()).to.equal('This is a feed event');
  });
});
