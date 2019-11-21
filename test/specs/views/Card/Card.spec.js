import { shallowMount } from '@vue/test-utils';
import Card from 'semantic-ui-vue/views/Card/Card';

describe.only('Card', () => {
  it('should create a SUI Card', () => {
    const card = shallowMount(Card);
    expect(card.is('div')).toEqual(true);
    expect(card.classes()).toContain('ui');
    expect(card.classes()).toContain('card');
    expect(card.text()).toEqual('');
  });
});
