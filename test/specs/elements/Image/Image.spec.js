import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Image from 'src/elements/Image/Image';

describe('Image', () => {
  testClassFromProps(Image, [
    'disabled', 'hidden',
  ]);

  it('should create a SUI Image', () => {
    const image = shallow(Image);
    expect(image.is('img')).to.equal(true);
    expect(image.hasClass('image')).to.equal(true);
  });

  it('should create a wrapped Image', () => {
    const image = shallow(Image, { propsData: { wrapped: true } });
    expect(image.is('div')).to.equal(true);
    expect(image.hasClass('image')).to.equal(true);
  });

  it('should display user image', () => {
    const src = 'photo-url';
    const image = shallow(Image, { propsData: { src } });
    expect(image.element.getAttribute('src')).to.equal(src);

    const wrappedImage = shallow(Image, { propsData: { src, wrapped: true } });
    expect(wrappedImage.find('img').element.getAttribute('src')).to.equal(src);
  });

  it('should have a value for name prop', () => {
    const image = shallow(Image, { propsData: { name: 'home' } });
    expect(image.hasProp('name', 'home')).to.equal(true);
  });

  it('should work with spaced prop', () => {
    const image = shallow(Image, { propsData: { spaced: true } });
    expect(image.hasClass('spaced')).to.equal(true);
    expect(image.hasClass('right')).to.equal(false);
    expect(image.hasClass('left')).to.equal(false);

    const imageWithoutSpace = shallow(Image, { propsData: { spaced: false } });
    expect(imageWithoutSpace.hasClass('spaced')).to.equal(false);
    expect(imageWithoutSpace.hasClass('right')).to.equal(false);
    expect(imageWithoutSpace.hasClass('left')).to.equal(false);

    const imageLeftSpace = shallow(Image, { propsData: { spaced: 'left' } });
    expect(imageLeftSpace.hasClass('spaced')).to.equal(true);
    expect(imageLeftSpace.hasClass('left')).to.equal(true);
    expect(imageLeftSpace.hasClass('right')).to.equal(false);

    const imageRightSpace = shallow(Image, { propsData: { spaced: 'right' } });
    expect(imageRightSpace.hasClass('spaced')).to.equal(true);
    expect(imageRightSpace.hasClass('left')).to.equal(false);
    expect(imageRightSpace.hasClass('right')).to.equal(true);
  });

  it('should create image with size prop', () => {
    const image = shallow(Image, { propsData: { size: 'mini' } });
    expect(image.hasClass('mini')).to.equal(true);
  });

  it('should create image with shape prop', () => {
    const image = shallow(Image, { propsData: { shape: 'rounded' } });
    expect(image.hasClass('rounded')).to.equal(true);
  });
});
