import { shallow } from 'vue-test-utils';
import FeedEvent from 'src/views/Feed/FeedEvent';

describe('FeedEvent', () => {
  it('should create a SUI FeedEvent', () => {
    const event = shallow(FeedEvent);
    expect(event.is('div')).to.equal(true);
    expect(event.hasClass('event')).to.equal(true);
    expect(event.text()).to.equal('');
  });

  it('should create a SUI FeedEvent with content', () => {
    const event = shallow(FeedEvent, { propsData: { content: 'This is a feed event' } });
    expect(event.is('div')).to.equal(true);
    expect(event.hasClass('event')).to.equal(true);
    expect(event.findAll('div').length).is.equal(2);
    expect(event.findAll('div').at(1).hasClass('content')).to.equal(true);
    expect(event.findAll('div').at(1).text()).to.equal('This is a feed event');
  });

  it('should create a SUI FeedEvent with icon, content and default slot', () => {
    const event = shallow(FeedEvent, {
      propsData: {
        icon: 'pencil',
        content: 'This is a feed event',
      },
      slots: {
        default: '<div>Event default slot</div>',
      },
    });
    expect(event.is('div')).to.equal(true);
    expect(event.hasClass('event')).to.equal(true);
    expect(event.findAll('div').length).is.equal(4);
    expect(event.findAll('div').at(1).hasClass('label')).to.equal(true);
    expect(event.findAll('div').at(1).contains('i')).to.equal(true);
    expect(event.findAll('div').at(1).find('i').hasClass('pencil')).to.equal(true);
    expect(event.findAll('div').at(2).hasClass('content')).to.equal(true);
    expect(event.findAll('div').at(2).text()).to.equal('This is a feed event');
    expect(event.findAll('div').at(3).text()).to.equal('Event default slot');
  });

  it('should create a SUI FeedEvent with image avatar, content and default slot', () => {
    const event = shallow(FeedEvent, {
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
    expect(event.hasClass('event')).to.equal(true);
    expect(event.findAll('div').length).is.equal(9);
    expect(event.findAll('div').at(1).hasClass('label')).to.equal(true);
    expect(event.findAll('div').at(1).contains('img')).to.equal(true);
    expect(event.findAll('div').at(1).find('img')
            .hasAttribute('src', '/avatar.png')).to.equal(true);
    expect(event.findAll('div').at(2).hasClass('content')).to.equal(true);
    expect(event.findAll('div').at(3).hasClass('date')).to.equal(true);
    expect(event.findAll('div').at(3).text()).to.equal('2 hours ago');
    expect(event.findAll('div').at(4).hasClass('summary')).to.equal(true);
    expect(event.findAll('div').at(4).text()).to.equal('Event summary');
    expect(event.findAll('div').at(5).hasClass('extra')).to.equal(true);
    expect(event.findAll('div').at(5).hasClass('text')).to.equal(true);
    expect(event.findAll('div').at(5).text()).to.equal('Extra text');
    expect(event.findAll('div').at(6).hasClass('extra')).to.equal(true);
    expect(event.findAll('div').at(6).hasClass('images')).to.equal(true);
    expect(event.findAll('div').at(6).findAll('img').length).to.equal(2);
    expect(event.findAll('div').at(6).findAll('img').at(0)
            .hasAttribute('src', '/image0.png')).to.equal(true);
    expect(event.findAll('div').at(6).findAll('img').at(1)
            .hasAttribute('src', '/image1.png')).to.equal(true);
    expect(event.findAll('div').at(7).hasClass('meta')).to.equal(true);
    expect(event.findAll('div').at(7).text()).to.equal('4 likes');
    expect(event.findAll('div').at(8).text()).to.equal('Event default slot');
  });

  it('should create a SUI FeedEvent with default slot', () => {
    const event = shallow(FeedEvent, { slots: { default: '<span>This is a feed event</span>' } });
    expect(event.is('div')).to.equal(true);
    expect(event.hasClass('event')).to.equal(true);
    expect(event.text()).to.equal('This is a feed event');
  });
});
