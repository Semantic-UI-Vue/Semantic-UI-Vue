import { shallow } from '@vue/test-utils';
import StepGroup from 'semantic-ui-vue/elements/Step/StepGroup';

describe('StepGroup', () => {
  it('should have class "three" when pass number/string', () => {
    const stepGroup = shallow(StepGroup, { propsData: { stepNumber: 3 } });
    const stepGroup2 = shallow(StepGroup, { propsData: { stepNumber: 'three' } });
    expect(stepGroup.classes()).to.include('three');
    expect(stepGroup2.classes()).to.include('three');
  });
});
