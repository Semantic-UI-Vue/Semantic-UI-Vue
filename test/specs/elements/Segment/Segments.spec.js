import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Segments from 'semantic-ui-vue/elements/Segment/Segments';

describe('Segments', () => {
  testClassFromProps(Segments, ['stacked', 'piled', 'raised', 'vertical', 'horizontal']);

  it('should create a SUI Segments', () => {
    const segments = shallow(Segments);
    expect(segments.is('div')).toEqual(true);
    expect(segments.classes()).toContain('ui');
    expect(segments.classes()).toContain('segments');
  });

  it('should have content', () => {
    const segments = shallow(Segments, { slots: { default: '<span>bar</span>' } });
    expect(segments.text()).toEqual('bar');
  });
});
