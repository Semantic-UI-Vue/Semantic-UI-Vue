import { shallow, mount } from '@vue/test-utils';
import FeedLabel from 'src/views/Feed/FeedLabel';

describe('FeedLabel', () => {
  it('should create a SUI FeedLabel', () => {
    const label = shallow(FeedLabel);
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('');
  });

  it('should create a SUI FeedLabel with content', () => {
    const label = shallow(FeedLabel, { propsData: { content: 'LABEL' } });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('LABEL');
  });

  it('should create a SUI FeedLabel with icon', () => {
    const label = mount(FeedLabel, { propsData: { icon: 'pencil' } });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.contains('i')).to.equal(true);
    expect(label.find('i').classes()).to.include('pencil');
  });

  it('should create a SUI FeedLabel with image', () => {
    const label = mount(FeedLabel, { propsData: { image: '/test-image.jpg' } });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.contains('img')).to.equal(true);
    expect(label.find('img').attributes().src).to.equal('/test-image.jpg');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const label = shallow(FeedLabel, {
      propsData: {
        image: '/test-image.jpg',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('Only render this');
  });

  it('should create a SUI FeedLabel with default slot', () => {
    const label = shallow(FeedLabel, { slots: { default: '<span>LABEL</span>' } });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('LABEL');
  });
});
