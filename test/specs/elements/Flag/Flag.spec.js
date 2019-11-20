import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Flag from 'semantic-ui-vue/elements/Flag/Flag';

describe('Flag', () => {
  testClassFromProps(Flag, ['flag']);

  it('should create a SUI Flag', () => {
    const flag = shallow(Flag);
    expect(flag.is('i')).toEqual(true);
    expect(flag.classes()).toContain('flag');
  });

  it('should be able to set country', () => {
    const flag = shallow(Flag, { propsData: { name: 'ae' } });
    expect(flag.classes()).toContain('flag');
    expect(flag.classes()).toContain('ae');
  });
});
