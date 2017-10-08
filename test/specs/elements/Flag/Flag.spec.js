import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Flag from 'src/elements/Flag/Flag';

describe('Flag', () => {
  testClassFromProps(Flag, ['flag']);

  it('should create a SUI Flag', () => {
    const flag = shallow(Flag);
    expect(flag.is('i')).to.equal(true);
    expect(flag.hasClass('flag')).to.equal(true);
  });

  it('should be able to set country', () => {
    const flag = shallow(Flag, { propsData: { name: 'ae' } });
    expect(flag.hasClass('flag')).to.equal(true);
    expect(flag.hasClass('ae')).to.equal(true);
  });
});
