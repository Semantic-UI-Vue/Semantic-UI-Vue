import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Segment from 'semantic-ui-vue/elements/Segment/Segment';

describe('Segment', () => {
  testClassFromProps(Segment, [
    'attached', 'basic', 'padded', 'inverted', 'stacked', 'piled', 'raised', 'vertical',
  ]);

  it('should create a SUI Segment', () => {
    const segment = shallow(Segment);
    expect(segment.is('div')).to.equal(true);
    expect(segment.classes()).to.include('ui');
    expect(segment.classes()).to.include('segment');
  });

  it('should have content', () => {
    const segment = shallow(Segment, { slots: { default: '<span>bar</span>' } });
    expect(segment.text()).to.equal('bar');
  });
});
