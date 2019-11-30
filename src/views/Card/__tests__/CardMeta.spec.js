import { shallowMount } from '@vue/test-utils';
import CardMeta from 'semantic-ui-vue/views/Card/CardMeta';

describe('CardMeta', () => {
  it('should create a standalone SUI CardMeta', () => {
    const cardMeta = shallowMount(CardMeta);
    expect(cardMeta.is('div')).toEqual(true);
    expect(cardMeta.classes()).toContain('meta');
    expect(cardMeta.text()).toEqual('');
  });

  it('should create a SUI CardHeader with default slot', () => {
    const cardMeta = shallowMount(CardMeta, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardMeta.is('div')).toEqual(true);
    expect(cardMeta.classes()).toContain('meta');
    expect(cardMeta.text()).toEqual('Default slot');
  });
});
