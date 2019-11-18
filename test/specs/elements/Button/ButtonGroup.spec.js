import { shallow } from '@vue/test-utils';
import ButtonGroup from 'semantic-ui-vue/elements/Button/ButtonGroup';

describe('Button', () => {
  describe('ButtonGroup', () => {
    it('should create a SUI ButtonGroup', () => {
      const buttonGroup = shallow(ButtonGroup);
      expect(buttonGroup.is('div')).to.equal(true);
      expect(buttonGroup.classes()).to.include('ui');
      expect(buttonGroup.classes()).to.include('buttons');
    });

    it('should set a width', () => {
      const buttonGroup = shallow(ButtonGroup, { propsData: { widths: 3 } });
      expect(buttonGroup.classes()).to.include('three');
    });
  });
});
