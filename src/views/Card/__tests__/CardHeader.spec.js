import { shallowMount } from '@vue/test-utils';
import CardHeader from 'semantic-ui-vue/views/Card/CardHeader';

describe('CardHeader', () => {
  it('should create a standalone SUI CardHeader', () => {
    const cardHeader = shallowMount(CardHeader);
    expect(cardHeader.is('div')).toEqual(true);
    expect(cardHeader.classes()).toContain('header');
    expect(cardHeader.text()).toEqual('');
  });

  it('should create a SUI CardHeader with default slot', () => {
    const cardHeader = shallowMount(CardHeader, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardHeader.is('div')).toEqual(true);
    expect(cardHeader.classes()).toContain('header');
    expect(cardHeader.text()).toEqual('Default slot');
  });
});
