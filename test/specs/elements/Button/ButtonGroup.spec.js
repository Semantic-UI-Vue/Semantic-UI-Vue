import { shallow } from 'vue-test-utils';
import ButtonGroup from 'src/elements/Button/ButtonGroup';

describe('Button', () => {
  describe('ButtonGroup', () => {
    it('should create a SUI ButtonGroup', () => {
      const buttonGroup = shallow(ButtonGroup);
      expect(buttonGroup.is('div')).to.equal(true);
      expect(buttonGroup.hasClass('ui')).to.equal(true);
      expect(buttonGroup.hasClass('buttons')).to.equal(true);
    });

    it('should set a width', () => {
      const buttonGroup = shallow(ButtonGroup, { propsData: { widths: 3 } });
      expect(buttonGroup.hasClass('three')).to.equal(true);
    });
  });
});
