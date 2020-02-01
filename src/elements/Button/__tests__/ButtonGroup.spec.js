import { shallowMount } from '@vue/test-utils';
import ButtonGroup from 'semantic-ui-vue/elements/Button/ButtonGroup';

describe('Button', () => {
  describe('ButtonGroup', () => {
    it('should create a SUI ButtonGroup', () => {
      const buttonGroup = shallowMount(ButtonGroup);
      expect(buttonGroup.is('div')).toEqual(true);
      expect(buttonGroup.classes()).toContain('ui');
      expect(buttonGroup.classes()).toContain('buttons');
    });

    it('should set a width', () => {
      const buttonGroup = shallowMount(ButtonGroup, {
        propsData: { widths: 3 },
      });
      expect(buttonGroup.classes()).toContain('three');
    });
  });
});
