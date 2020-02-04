import { shallowMount } from '@vue/test-utils';
import { testClassFromProps, withRequired } from 'test/utils';
import Image from 'semantic-ui-vue/elements/Image/Image';

const ImageWithRequired = withRequired(Image, { src: 'test.jpg' });

describe('Image', () => {
  testClassFromProps(ImageWithRequired, ['disabled', 'hidden']);

  it('should create a SUI Image', () => {
    const image = shallowMount(ImageWithRequired);
    expect(image.is('img')).toEqual(true);
    expect(image.classes()).toContain('image');
  });

  it('should create a wrapped Image', () => {
    const image = shallowMount(ImageWithRequired, {
      propsData: { wrapped: true },
    });
    expect(image.is('div')).toEqual(true);
    expect(image.classes()).toContain('image');
  });

  it('should display user image', () => {
    const src = 'photo-url';
    const image = shallowMount(ImageWithRequired, { propsData: { src } });
    expect(image.element.getAttribute('src')).toEqual(src);

    const wrappedImage = shallowMount(ImageWithRequired, {
      propsData: { src, wrapped: true },
    });
    expect(wrappedImage.find('img').element.getAttribute('src')).toEqual(src);
  });

  it('should work with spaced prop', () => {
    const image = shallowMount(ImageWithRequired, {
      propsData: { spaced: true },
    });
    expect(image.classes()).toContain('spaced');
    expect(image.classes()).not.toContain('right');
    expect(image.classes()).not.toContain('left');

    const imageWithoutSpace = shallowMount(ImageWithRequired, {
      propsData: { spaced: false },
    });
    expect(imageWithoutSpace.classes()).not.toContain('spaced');
    expect(imageWithoutSpace.classes()).not.toContain('right');
    expect(imageWithoutSpace.classes()).not.toContain('left');

    const imageLeftSpace = shallowMount(ImageWithRequired, {
      propsData: { spaced: 'left' },
    });
    expect(imageLeftSpace.classes()).toContain('spaced');
    expect(imageLeftSpace.classes()).toContain('left');
    expect(imageLeftSpace.classes()).not.toContain('right');

    const imageRightSpace = shallowMount(ImageWithRequired, {
      propsData: { spaced: 'right' },
    });
    expect(imageRightSpace.classes()).toContain('spaced');
    expect(imageRightSpace.classes()).not.toContain('left');
    expect(imageRightSpace.classes()).toContain('right');
  });

  it('should create image with size prop', () => {
    const image = shallowMount(ImageWithRequired, {
      propsData: { size: 'mini' },
    });
    expect(image.classes()).toContain('mini');
  });

  it('should create image with shape prop', () => {
    const image = shallowMount(ImageWithRequired, {
      propsData: { shape: 'rounded' },
    });
    expect(image.classes()).toContain('rounded');
  });
});
