import { shallowMount } from '@vue/test-utils';
import CardGroup from 'semantic-ui-vue/views/Card/CardGroup';

describe('CardGroup', () => {
  it('should create a standalone SUI CardGroup', () => {
    const cardGroup = shallowMount(CardGroup);
    expect(cardGroup.is('div')).toEqual(true);
    expect(cardGroup.classes()).toContain('ui');
    expect(cardGroup.classes()).toContain('cards');
    expect(cardGroup.text()).toEqual('');
  });

  it('should create create a SUI CardGroup with correct classes according to props', () => {
    const cardGroup = shallowMount(CardGroup, {
      propsData: {
        itemsPerRow: 3,
        stackable: true,
      },
    });
    expect(cardGroup.is('div')).toEqual(true);
    expect(cardGroup.classes()).toContain('ui');
    expect(cardGroup.classes()).toContain('three');
    expect(cardGroup.classes()).toContain('stackable');
    expect(cardGroup.classes()).toContain('cards');
    expect(cardGroup.text()).toEqual('');
  });
});
