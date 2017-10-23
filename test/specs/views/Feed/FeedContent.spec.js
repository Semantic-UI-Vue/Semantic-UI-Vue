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
    const divs = content.findAll('div');
    expect(divs.length).is.equal(6);
    expect(divs.at(1).hasClass('date')).to.equal(true);
    expect(divs.at(1).text()).to.equal('1 hour ago');
    expect(divs.at(2).hasClass('summary')).to.equal(true);
    expect(divs.at(2).text()).to.equal('Summary text');
    expect(divs.at(3).hasClass('extra')).to.equal(true);
    expect(divs.at(3).hasClass('text')).to.equal(true);
    expect(divs.at(3).text()).to.equal('Extra text here');
    expect(divs.at(4).hasClass('extra')).to.equal(true);
    expect(divs.at(4).hasClass('images')).to.equal(true);
    const extraDivImgs = divs.at(4).findAll('img');
    expect(extraDivImgs.length).to.equal(2);
    expect(extraDivImgs.at(0).hasAttribute('src', '/image0.png')).to.equal(true);
    expect(extraDivImgs.at(1).hasAttribute('src', '/image1.png')).to.equal(true);
    expect(divs.at(5).hasClass('meta')).to.equal(true);
    expect(divs.at(5).text()).to.equal('4 likes');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const content = shallow(FeedContent, {
      propsData: {
        content: 'Main content here',
        date: '1 hour ago',
        summary: 'Summary text',
        extraImages: ['/image0.png', '/image1.png'],
        extraText: 'Extra text here',
        meta: '4 likes',
      },
      slots: {
        default: '<div>Main content here</div>',
      },
    });
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    const divs = content.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).text()).to.equal('Main content here');
  });

  it('should create a SUI FeedContent with default slot', () => {
    const content = shallow(FeedContent, { slots: { default: '<span>Main content here</span>' } });
    expect(content.is('div')).to.equal(true);
    expect(content.hasClass('content')).to.equal(true);
    expect(content.text()).to.equal('Main content here');
  });
});
