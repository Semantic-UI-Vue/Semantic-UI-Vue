import { shallow } from 'vue-test-utils';
import FeedLabel from 'src/views/Feed/FeedLabel';

describe('FeedLabel', () => {
  it('should create a SUI FeedLabel', () => {
    const label = shallow(FeedLabel);
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.text()).to.equal('');
  });

  it('should create a SUI FeedLabel with content', () => {
    const label = shallow(FeedLabel, { propsData: { content: 'LABEL' } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.text()).to.equal('LABEL');
  });

  it('should create a SUI FeedLabel with icon', () => {
    const label = shallow(FeedLabel, { propsData: { icon: 'pencil' } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.contains('i')).to.equal(true);
    expect(label.find('i').hasClass('pencil')).to.equal(true);
  });

  it('should create a SUI FeedLabel with image', () => {
    const label = shallow(FeedLabel, { propsData: { image: '/test-image.jpg' } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.contains('img')).to.equal(true);
    expect(label.find('img').hasAttribute('src', '/test-image.jpg')).to.equal(true);
  });

  it('should create a SUI FeedLabel with default slot', () => {
    const label = shallow(FeedLabel, { slots: { default: '<span>LABEL</span>' } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.text()).to.equal('LABEL');
  });
});
