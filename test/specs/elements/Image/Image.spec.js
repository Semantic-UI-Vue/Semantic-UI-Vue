import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Image from 'src/elements/Image/Image';

describe('Image', () => {
  testClassFromProps(Image, [
    'disabled', 'hidden',
  ]);

  it('should create a SUI Image', () => {
    const image = shallow(Image);
    expect(image.is('img')).to.equal(true);
    expect(image.classes()).to.include('image');
  });

  it('should create a wrapped Image', () => {
    const image = shallow(Image, { propsData: { wrapped: true } });
    expect(image.is('div')).to.equal(true);
    expect(image.classes()).to.include('image');
  });

  it('should display user image', () => {
    const src = 'photo-url';
    const image = shallow(Image, { propsData: { src } });
    expect(image.element.getAttribute('src')).to.equal(src);

    const wrappedImage = shallow(Image, { propsData: { src, wrapped: true } });
    expect(wrappedImage.find('img').element.getAttribute('src')).to.equal(src);
  });

  it('should work with spaced prop', () => {
    const image = shallow(Image, { propsData: { spaced: true } });
    expect(image.classes()).to.include('spaced');
    expect(image.classes()).to.not.include('right');
    expect(image.classes()).to.not.include('left');

    const imageWithoutSpace = shallow(Image, { propsData: { spaced: false } });
    expect(imageWithoutSpace.classes()).to.not.include('spaced');
    expect(imageWithoutSpace.classes()).to.not.include('right');
    expect(imageWithoutSpace.classes()).to.not.include('left');

    const imageLeftSpace = shallow(Image, { propsData: { spaced: 'left' } });
    expect(imageLeftSpace.classes()).to.include('spaced');
    expect(imageLeftSpace.classes()).to.include('left');
    expect(imageLeftSpace.classes()).to.not.include('right');

    const imageRightSpace = shallow(Image, { propsData: { spaced: 'right' } });
    expect(imageRightSpace.classes()).to.include('spaced');
    expect(imageRightSpace.classes()).to.not.include('left');
    expect(imageRightSpace.classes()).to.include('right');
  });

  it('should create image with size prop', () => {
    const image = shallow(Image, { propsData: { size: 'mini' } });
    expect(image.classes()).to.include('mini');
  });

  it('should create image with shape prop', () => {
    const image = shallow(Image, { propsData: { shape: 'rounded' } });
    expect(image.classes()).to.include('rounded');
  });
});
