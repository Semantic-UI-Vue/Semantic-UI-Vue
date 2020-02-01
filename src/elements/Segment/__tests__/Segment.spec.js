import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Segment from 'semantic-ui-vue/elements/Segment/Segment';

describe('Segment', () => {
  testClassFromProps(Segment, [
    'attached',
    'basic',
    'padded',
    'inverted',
    'stacked',
    'piled',
    'raised',
    'vertical',
  ]);

  it('should create a SUI Segment', () => {
    const segment = shallowMount(Segment);
    expect(segment.is('div')).toEqual(true);
    expect(segment.classes()).toContain('ui');
    expect(segment.classes()).toContain('segment');
  });

  it('should have content', () => {
    const segment = shallowMount(Segment, {
      slots: { default: '<span>bar</span>' },
    });
    expect(segment.text()).toEqual('bar');
  });
});
