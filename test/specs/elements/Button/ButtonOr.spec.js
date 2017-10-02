import { shallow } from 'vue-test-utils';
import ButtonOr from 'src/elements/Button/ButtonOr';

describe('Button', () => {
  describe('ButtonOr', () => {
    it('should create a SUI ButtonOr', () => {
      const buttonOr = shallow(ButtonOr);
      expect(buttonOr.is('div')).to.equal(true);
      expect(buttonOr.hasClass('or')).to.equal(true);
    });
  });
});
