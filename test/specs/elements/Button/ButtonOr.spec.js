import { shallow } from '@vue/test-utils';
import ButtonOr from 'semantic-ui-vue/elements/Button/ButtonOr';

describe('Button', () => {
  describe('ButtonOr', () => {
    it('should create a SUI ButtonOr', () => {
      const buttonOr = shallow(ButtonOr);
      expect(buttonOr.is('div')).toEqual(true);
      expect(buttonOr.classes()).toContain('or');
    });
  });
});
