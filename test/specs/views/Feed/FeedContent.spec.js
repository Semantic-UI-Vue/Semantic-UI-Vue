import { shallow } from 'vue-test-utils';
import FeedContent from 'src/views/Feed/FeedContent';

describe('FeedContent', () => {
  it('should create a SUI FeedContent', () => {
    const content = shallow(FeedContent);
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    expect(content.text()).to.equal('');
  });

  it('should create a SUI FeedContent with content', () => {
    const content = shallow(FeedContent, { propsData: { content: 'Main content here' } });
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    expect(content.text()).to.equal('Main content here');
  });

  it('should create a SUI FeedContent with content and other components', () => {
    const content = shallow(FeedContent, { propsData: {
      content: 'Main content here',
      date: '1 hour ago',
      summary: 'Summary text',
      extraImages: ['/image0.png', '/image1.png'],
      extraText: 'Extra text here',
      meta: '4 likes',
    } });
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    expect(content.findAll('div').length).is.equal(6);
    expect(content.findAll('div').at(1).hasClass('date')).to.equal(true);
    expect(content.findAll('div').at(1).text()).to.equal('1 hour ago');
    expect(content.findAll('div').at(2).hasClass('summary')).to.equal(true);
    expect(content.findAll('div').at(2).text()).to.equal('Summary text');
    expect(content.findAll('div').at(3).hasClass('extra')).to.equal(true);
    expect(content.findAll('div').at(3).hasClass('text')).to.equal(true);
    expect(content.findAll('div').at(3).text()).to.equal('Extra text here');
    expect(content.findAll('div').at(4).hasClass('extra')).to.equal(true);
    expect(content.findAll('div').at(4).hasClass('images')).to.equal(true);
    expect(content.findAll('div').at(4).findAll('img').length).to.equal(2);
    expect(content.findAll('div').at(4).findAll('img').at(0)
            .hasAttribute('src', '/image0.png')).to.equal(true);
    expect(content.findAll('div').at(4).findAll('img').at(1)
            .hasAttribute('src', '/image1.png')).to.equal(true);
    expect(content.findAll('div').at(5).hasClass('meta')).to.equal(true);
    expect(content.findAll('div').at(5).text()).to.equal('4 likes');
  });

  it('should create a SUI FeedContent with default slot', () => {
    const content = shallow(FeedContent, { slots: { default: '<span>Main content here</span>' } });
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    expect(content.text()).to.equal('Main content here');
  });
});
